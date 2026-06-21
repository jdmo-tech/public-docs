# Configuration

After installation, you can configure My App using the `.env` file and the `config.js` file in the project root.

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ | Connection string for your database |
| `API_KEY` | ✅ | Your API key from the dashboard |
| `PORT` | ❌ | Port to run the server on (default: `3000`) |
| `LOG_LEVEL` | ❌ | Logging verbosity: `debug`, `info`, `error` |

## Config file

The `config.js` file lets you set app-level options:

```js
export default {
  app: {
    name: 'My App',
    debug: false,
  },
  features: {
    enableNotifications: true,
    maxUploadSizeMB: 10,
  }
}
```

### Options reference

**`app.name`** — The display name shown in the UI.

**`app.debug`** — Set to `true` to enable verbose logging in development.

**`features.enableNotifications`** — Toggle email/push notifications on or off.

**`features.maxUploadSizeMB`** — Maximum file upload size in megabytes.

::: tip
Changes to `config.js` require a server restart to take effect.
:::
