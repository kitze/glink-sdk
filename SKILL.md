---
name: glink
description: Use Glink to manage product changelogs, projects, roadmap entries, feature requests, discussions, public pages, and user-facing release notes through the official SDK and CLI.
---

# Glink

Use the CLI for quick operations:

```bash
glink projects list
glink projects get <project-id>
glink changelogs list <project-id>
glink changelogs get <changelog-id>
glink requests public-list <username> <project-slug>
```

Use the SDK for scripts:

```ts
import { configure, Projects, Changelogs } from "glink-sdk";

configure({ apiKey: process.env.GLINK_API_KEY! });

const projects = await Projects.projectList();
const changelogs = await Changelogs.changelogListByProject({
  body: { projectId: "project-id" },
});
```

Authentication:

- Prefer `GLINK_API_KEY`.
- Optional override: `GLINK_BASE_URL`, default `https://glink.so/api/rest`.

## Changelog Writing

When using Glink for release notes or changelogs, write user-facing product copy. Inspect real code/product changes first, explain benefits and fixes clearly, and avoid dumping commit messages or internal implementation details.

## MCP Boundary

This SDK repo does not package MCP. MCP belongs in the Glink app codebase and is hosted by the product at `/api/mcp`, layered over the app API.
