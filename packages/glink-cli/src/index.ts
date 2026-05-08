#!/usr/bin/env node

import { Command, CommanderError } from "commander";
import {
  GlinkApiError,
  GlinkConfigError,
  initializeFromEnv,
  request,
} from "glink-sdk";

type GlobalOptions = {
  json?: boolean;
};

type PublishOptions = {
  publishedAt?: string;
  moveEntries: boolean;
  closeRequests: boolean;
  notifyUsers: boolean;
  entriesColumnId?: string;
};

function parseJson(raw: string | undefined): unknown {
  if (!raw) {
    return undefined;
  }
  return JSON.parse(raw);
}

function output(data: unknown, options: GlobalOptions): void {
  if (options.json || typeof data === "object") {
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  console.log(String(data ?? ""));
}

function handleError(error: unknown): never {
  if (error instanceof GlinkConfigError) {
    console.error(`Error: ${error.message}`);
    console.error("Set GLINK_API_KEY, then run the command again.");
    process.exit(1);
  }

  if (error instanceof GlinkApiError) {
    console.error(`Error [${error.status}]: ${error.message}`);
    console.error(JSON.stringify(error.data, null, 2));
    process.exit(1);
  }

  if (error instanceof CommanderError) {
    process.exit(error.exitCode);
  }

  const message = error instanceof Error ? error.message : String(error);
  console.error(`Unexpected error: ${message}`);
  process.exit(1);
}

function getGlobalOptions(command: Command): GlobalOptions {
  let current: Command | null = command;
  while (current) {
    const options = current.opts<GlobalOptions>();
    if (options.json) {
      return { json: true };
    }
    current = current.parent ?? null;
  }
  return {};
}

function isCommand(value: unknown): value is Command {
  return (
    value instanceof Command ||
    (typeof value === "object" &&
      value !== null &&
      "opts" in value &&
      typeof (value as { opts?: unknown }).opts === "function")
  );
}

function getCommandFromArgs(args: unknown[]): Command {
  const command = [...args].reverse().find(isCommand);
  if (!command) {
    throw new Error("Missing command context");
  }
  return command;
}

async function runAuthed(
  command: Command,
  action: (options: GlobalOptions) => Promise<unknown>,
): Promise<void> {
  initializeFromEnv();
  const globalOptions = getGlobalOptions(command);
  const data = await action(globalOptions);
  output(data, globalOptions);
}

function post(path: string, body: unknown = {}): Promise<unknown> {
  return request(path, {
    method: "POST",
    body: JSON.stringify(body),
  });
}

const program = new Command("glink")
  .description("CLI for Glink projects, changelogs, entries, and requests")
  .version("0.1.0")
  .option("--json", "Print JSON output")
  .showHelpAfterError()
  .exitOverride();

const projects = program.command("projects").description("Manage projects");

projects
  .command("list")
  .description("List projects")
  .action((...args: unknown[]) =>
    runAuthed(getCommandFromArgs(args), () => post("/projects/list")),
  );

projects
  .command("get")
  .argument("<id>", "Project ID")
  .description("Get a project")
  .action((id: string, ...args: unknown[]) =>
    runAuthed(getCommandFromArgs(args), () => post("/projects/get", { id })),
  );

const changelogs = program.command("changelogs").description("Manage changelogs");

changelogs
  .command("list")
  .argument("<projectId>", "Project ID")
  .description("List changelogs by project")
  .action((projectId: string, ...args: unknown[]) =>
    runAuthed(getCommandFromArgs(args), () =>
      post("/changelogs/list", { projectId }),
    ),
  );

changelogs
  .command("get")
  .argument("<id>", "Changelog ID")
  .description("Get a changelog")
  .action((id: string, ...args: unknown[]) =>
    runAuthed(getCommandFromArgs(args), () => post("/changelogs/get", { id })),
  );

changelogs
  .command("publish")
  .argument("<id>", "Changelog ID")
  .option("--published-at <iso>", "Published timestamp")
  .option("--no-move-entries", "Do not move entries to another column")
  .option("--no-close-requests", "Do not close linked requests")
  .option("--no-notify-users", "Do not notify subscribers")
  .option("--entries-column-id <id>", "Column ID to move entries into")
  .description("Publish a changelog")
  .action((id: string, options: PublishOptions, ...args: unknown[]) =>
    runAuthed(getCommandFromArgs(args), () => {
      const body: Record<string, unknown> = {
        id,
        publishedAt: options.publishedAt ?? new Date().toISOString(),
        shouldMoveEntries: options.moveEntries,
        shouldCloseRequests: options.closeRequests,
        shouldNotifyUsers: options.notifyUsers,
      };

      if (options.entriesColumnId) {
        body.entriesColumnId = options.entriesColumnId;
      }

      return post("/changelogs/publish", body);
    }),
  );

const entries = program.command("entries").description("Manage entries");

entries
  .command("list-by-project")
  .argument("<projectId>", "Project ID")
  .description("List entries by project")
  .action((projectId: string, ...args: unknown[]) =>
    runAuthed(getCommandFromArgs(args), () =>
      post("/entries/list-by-project", { projectId }),
    ),
  );

const requests = program.command("requests").description("Manage requests");

requests
  .command("public-list")
  .argument("<username>", "Glink username")
  .argument("<projectSlug>", "Project slug")
  .option("--limit <limit>", "Max results", "50")
  .description("List public requests")
  .action(
    (
      username: string,
      projectSlug: string,
      options: { limit: string },
      ...args: unknown[]
    ) =>
      runAuthed(getCommandFromArgs(args), () =>
        post("/requests/public/list", {
          username,
          projectSlug,
          limit: Number(options.limit),
        }),
      ),
  );

program
  .command("request")
  .argument("<method>", "HTTP method")
  .argument("<path>", "API path, for example /projects/list")
  .argument("[json]", "Optional JSON body")
  .description("Make a raw Glink REST request")
  .action((method: string, path: string, ...args: unknown[]) => {
    const command = getCommandFromArgs(args);
    const rawBody = args.find((arg): arg is string => typeof arg === "string");
    const normalizedMethod = method.toUpperCase();
    const shouldSendJsonBody =
      rawBody ||
      normalizedMethod === "POST" ||
      normalizedMethod === "PUT" ||
      normalizedMethod === "PATCH";

    return runAuthed(command, () =>
      request(path, {
        method: normalizedMethod,
        body: shouldSendJsonBody
          ? JSON.stringify(rawBody ? parseJson(rawBody) : {})
          : undefined,
      }),
    );
  });

program.parseAsync(process.argv).catch(handleError);
