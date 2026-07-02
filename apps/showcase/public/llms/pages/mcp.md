# MCP Server

Model Context Protocol (MCP) server for LibreNG UI component library.

## Claudecode-

Add the LibreNG UI MCP server using the CLI. After adding, start a new session and use /mcp to verify the connection.

```bash
# Add to user config (available in all projects)
claude mcp add libreng -s user -- npx -y @libreng/mcp

# Or add to current project only
claude mcp add libreng -- npx -y @libreng/mcp
```

## Cursor-

Create .cursor/mcp.json in your project or ~/.cursor/mcp.json for global configuration.

```typescript
{
    "mcpServers": {
        "@libreng/ui": {
            "command": "npx",
            "args": ["-y", "@libreng/mcp"]
        }
    }
}
```

## Exampleprompts-

Once installed, try asking your AI assistant:

```typescript
"Show me how to use the Table component with sorting and filtering"
"What props does the Button component have?"
"How do I customize the Dialog component styling with Pass Through?"
"Compare the Select and Listbox components"
"What's the best component for a date picker?"
"How do I migrate from LibreNG UI v20 to v21?"
```

## Introduction-

Model Context Protocol (MCP) is an open standard that enables AI models to connect with external tools and data sources . The LibreNG UI MCP server provides AI assistants with comprehensive access to: Component documentation including props , events , templates , and methods Theming and styling with Pass Through and design tokens Code examples and usage patterns Migration guides for version upgrades Installation and configuration guides

## Openaicodex-

Add the LibreNG UI MCP server using the CLI or edit ~/.codex/config.toml directly.

```bash
# Using the CLI
codex mcp add libreng -- npx -y @libreng/mcp

# Or edit ~/.codex/config.toml
[mcp_servers.libreng]
command = "npx"
args = ["-y", "@libreng/mcp"]
```

## Tools-

Component Information Tools for exploring and understanding LibreNG UI components. list_components : List all LibreNG UI components with categories get_component : Get detailed info about a specific component search_components : Search components by name or description get_component_props : Get all props for a component get_component_events : Get all events for a component get_component_methods : Get all methods for a component get_component_slots : Get all templates for a component compare_components : Compare two components side by side Code Examples Tools for retrieving code samples and generating templates. get_usage_example : Get code examples for a component list_examples : List all available code examples get_example : Get a specific example by component and section generate_component_template : Generate a basic component template Theming & Styling Tools for customizing component appearance and styling. get_component_pt : Get Pass Through options for DOM customization get_component_tokens : Get design tokens (CSS variables) get_component_styles : Get CSS class names get_theming_guide : Get detailed theming guide get_passthrough_guide : Get Pass Through customization guide get_tailwind_guide : Get Tailwind CSS integration guide Documentation & Guides Tools for accessing LibreNG UI documentation and guides. list_guides : List all guides and documentation pages get_guide : Get a specific guide by name get_configuration : Get LibreNG UI configuration options get_installation : Get installation instructions get_accessibility_guide : Get accessibility guide get_accessibility_info : Get accessibility info for a component Migration Tools for upgrading between LibreNG UI versions. get_migration_guide : Get migration guide overview migrate_v18_to_v19 : v18 to v19 migration guide migrate_v19_to_v20 : v19 to v20 migration guide migrate_v20_to_v21 : v20 to v21 migration guide Search & Discovery Tools for finding components based on various criteria. search_all : Search across components, guides, and props suggest_component : Suggest components based on use case find_by_prop : Find components with a specific prop find_by_event : Find components that emit a specific event find_components_with_feature : Find components supporting a feature get_related_components : Find related components

## Vscode-

Create .vscode/mcp.json in your project or ~/Library/Application Support/Code/User/mcp.json for global configuration.

```typescript
{
    "servers": {
        "@libreng/ui": {
            "command": "npx",
            "args": ["-y", "@libreng/mcp"]
        }
    }
}
```

## Windsurf-

Edit ~/.codeium/windsurf/mcp_config.json to add the LibreNG UI MCP server.

```typescript
{
    "mcpServers": {
        "@libreng/ui": {
            "command": "npx",
            "args": ["-y", "@libreng/mcp"]
        }
    }
}
```

## Zed-

Add to your Zed settings at ~/.config/zed/settings.json (Linux) or ~/Library/Application Support/Zed/settings.json (macOS).

```typescript
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

