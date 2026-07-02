# @libreng/mcp

Model Context Protocol (MCP) server for LibreNG UI component library. Provides AI assistants with comprehensive access to LibreNG UI component documentation, props, events, templates, theming, and code examples.

## What is MCP?

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) is an open standard that enables AI models to connect with external tools and data sources. By installing this MCP server, your AI assistant gains deep knowledge of LibreNG UI components and can provide accurate, up-to-date information while helping you build Angular applications.

## Installation

### Claude Code

Add the LibreNG UI MCP server using the CLI:

```bash
# Add to your user config (available in all projects)
claude mcp add libreng -s user -- npx -y @libreng/mcp

# Or add to current project only
claude mcp add libreng -- npx -y @libreng/mcp
```

Alternatively, use the JSON format for more control:

```bash
claude mcp add-json primeng '{"command":"npx","args":["-y","@libreng/mcp"]}' -s user
```

**Useful commands:**

```bash
claude mcp list           # List all MCP servers
claude mcp get primeng    # Get server details
claude mcp remove primeng # Remove the server
```

After adding, start a new Claude Code session and use `/mcp` to verify the connection.

> **Reference:** [Claude Code MCP Documentation](https://code.claude.com/docs/en/mcp)

---

### VS Code

**Option 1: Project Configuration**

Create `.vscode/mcp.json` in your project:

```json
{
    "servers": {
        "@libreng/ui": {
            "command": "npx",
            "args": ["-y", "@libreng/mcp"]
        }
    }
}
```

**Option 2: Global Configuration**

Create or edit `~/Library/Application Support/Code/User/mcp.json` (macOS) or `~/.config/Code/User/mcp.json` (Linux):

```json
{
    "servers": {
        "@libreng/ui": {
            "command": "npx",
            "args": ["-y", "@libreng/mcp"]
        }
    }
}
```

After adding, the MCP server will be available in GitHub Copilot Chat.

> **Reference:** [VS Code MCP Documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

---

### Cursor

**Option 1: Project Configuration**

Create `.cursor/mcp.json` in your project:

```json
{
    "mcpServers": {
        "@libreng/ui": {
            "command": "npx",
            "args": ["-y", "@libreng/mcp"]
        }
    }
}
```

**Option 2: Global Configuration**

Create or edit `~/.cursor/mcp.json` in your home directory:

```json
{
    "mcpServers": {
        "@libreng/ui": {
            "command": "npx",
            "args": ["-y", "@libreng/mcp"]
        }
    }
}
```

**Option 3: Via Settings UI**
1. Go to **Cursor Settings** > **Tools & Integrations**
2. Click **New MCP Server**
3. Add the configuration above

After adding, go to **Settings > MCP** and click the refresh button. The Composer Agent will automatically use LibreNG UI tools when relevant.

> **Reference:** [Cursor MCP Documentation](https://docs.cursor.com/context/model-context-protocol)

---

### OpenAI Codex CLI

**Option 1: Using the CLI**

```bash
codex mcp add libreng -- npx -y @libreng/mcp
```

**Option 2: Direct Configuration**

Edit `~/.codex/config.toml`:

```toml
[mcp_servers.libreng]
command = "npx"
args = ["-y", "@libreng/mcp"]
```

After adding, the MCP server will be available in both the Codex CLI and VS Code extension.

> **Reference:** [OpenAI Codex MCP Documentation](https://developers.openai.com/codex/mcp/)

---

### Windsurf

**Option 1: Via Settings UI**
1. Click **Windsurf - Settings** (bottom right) or press `Cmd+Shift+P` / `Ctrl+Shift+P`
2. Type "Open Windsurf Settings"
3. Navigate to **Cascade** section
4. Click **Manage MCPs** > **View raw config**

**Option 2: Direct Configuration**

Edit `~/.codeium/windsurf/mcp_config.json`:

```json
{
    "mcpServers": {
        "@libreng/ui": {
            "command": "npx",
            "args": ["-y", "@libreng/mcp"]
        }
    }
}
```

After adding, the MCP server will be available in Cascade.

> **Reference:** [Windsurf MCP Documentation](https://docs.windsurf.com/windsurf/cascade/mcp)

---

### Zed

Add to your Zed settings (`~/.config/zed/settings.json` on Linux, `~/Library/Application Support/Zed/settings.json` on macOS):

```json
{
    "context_servers": {
        "@libreng/ui": {
            "command": {
                "path": "npx",
                "args": ["-y", "@libreng/mcp"]
            }
        }
    }
}
```

After adding, restart Zed. Check the Agent Panel's settings view - a green indicator dot next to "primeng" confirms the server is active.

> **Reference:** [Zed MCP Documentation](https://zed.dev/docs/ai/mcp)

---

## Available Tools

### Component Information

| Tool | Description |
|------|-------------|
| `list_components` | List all LibreNG UI components with categories |
| `get_component` | Get detailed info about a specific component |
| `search_components` | Search components by name or description |
| `get_component_props` | Get all props for a component |
| `get_component_events` | Get all events for a component |
| `get_component_methods` | Get all methods for a component |
| `get_component_slots` | Get all templates for a component |
| `compare_components` | Compare two components side by side |
| `get_categories` | Get all component categories |

### Code Examples

| Tool | Description |
|------|-------------|
| `get_usage_example` | Get code examples for a component |
| `list_examples` | List all available code examples |
| `get_example` | Get a specific example by component and section |
| `generate_component_template` | Generate a basic component template |

### Theming & Styling

| Tool | Description |
|------|-------------|
| `get_component_pt` | Get Pass Through options for DOM customization |
| `get_component_tokens` | Get design tokens (CSS variables) |
| `get_component_styles` | Get CSS class names |
| `get_theming_info` | Get theming information |
| `get_theming_guide` | Get detailed theming guide |
| `get_passthrough_guide` | Get Pass Through customization guide |
| `get_tailwind_guide` | Get Tailwind CSS integration guide |

### Documentation & Guides

| Tool | Description |
|------|-------------|
| `list_guides` | List all guides and documentation pages |
| `get_guide` | Get a specific guide by name |
| `get_configuration` | Get LibreNG UI configuration options |
| `get_installation` | Get installation instructions |
| `get_icons_guide` | Get icons usage guide |
| `get_accessibility_guide` | Get accessibility guide |
| `get_accessibility_info` | Get accessibility info for a component |

### Migration

| Tool | Description |
|------|-------------|
| `get_migration_guide` | Get migration guide overview |
| `migrate_v18_to_v19` | v18 to v19 migration guide |
| `migrate_v19_to_v20` | v19 to v20 migration guide |
| `migrate_v20_to_v21` | v20 to v21 migration guide |

### Search & Discovery

| Tool | Description |
|------|-------------|
| `search_all` | Search across components, guides, and props |
| `suggest_component` | Suggest components based on use case |
| `find_by_prop` | Find components with a specific prop |
| `find_by_event` | Find components that emit a specific event |
| `find_components_with_feature` | Find components supporting a feature |
| `get_related_components` | Find related components |

### Utilities

| Tool | Description |
|------|-------------|
| `get_component_url` | Get the official documentation URL |
| `get_component_import` | Get the correct import statement |
| `get_component_sections` | Get all sections/features for a component |
| `validate_props` | Validate props for a component |
| `export_component_docs` | Export documentation in markdown |
| `get_form_components` | Get all form input components |
| `get_data_components` | Get all data display components |
| `get_overlay_components` | Get all overlay/popup components |
| `get_performance_tips` | Get performance optimization tips |
| `get_version_info` | Get version and compatibility info |

## Example Prompts

Once installed, try asking your AI assistant:

- "Show me how to use the DataTable component with sorting and filtering"
- "What props does the Button component have?"
- "How do I customize the Dialog component styling with Pass Through?"
- "Compare the Select and Listbox components"
- "What's the best component for a date picker?"
- "How do I migrate from LibreNG UI v20 to v21?"

## Requirements

- Node.js 18+
- One of the supported AI tools (Claude Code, Cursor, OpenAI Codex, Windsurf, Zed)

## Links

- [LibreNG UI Documentation](https://github.com/JackAndJack26/libreng-ui/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [GitHub Repository](https://github.com/JackAndJack26/libreng-ui)
- [Report Issues](https://github.com/JackAndJack26/libreng-ui/issues)

## License

MIT
