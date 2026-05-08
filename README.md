# Glink SDK

Official TypeScript SDK and CLI for Glink.

This public repo contains:

- `glink-sdk`: generated TypeScript client plus configuration helpers
- `glink-cli`: command line interface for projects, changelogs, entries, requests, and raw API calls
- `SKILL.md`: agent skill instructions for `npx skills add kitze/glink-sdk`

MCP is intentionally not packaged here. Glink hosts MCP from the app codebase at `https://glink.so/api/mcp`.

## Install

```bash
pnpm add glink-sdk
pnpm add -g glink-cli
```

Set an API key from Glink settings:

```bash
export GLINK_API_KEY=glink_...
```

## CLI

```bash
glink projects list
glink projects get <project-id>
glink changelogs list <project-id>
glink requests public-list <username> <project-slug>
glink request POST /projects/list
```

## SDK

```ts
import { configure, Projects } from "glink-sdk";

configure({ apiKey: process.env.GLINK_API_KEY! });

const projects = await Projects.projectList();
```

## Skill

```bash
npx skills add kitze/glink-sdk
```
