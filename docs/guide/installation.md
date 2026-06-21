# Installation

This guide walks you through installing My App on your local machine.

## Step 1 — Clone the repository

```bash
git clone https://github.com/your-org/your-app.git
cd your-app
```

## Step 2 — Install dependencies

```bash
npm install
```

## Step 3 — Set up environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

Open `.env` and update the following:

```bash
DATABASE_URL=your_database_url_here
API_KEY=your_api_key_here
PORT=3000
```

## Step 4 — Run the app

```bash
npm run dev
```

Your app should now be running at `http://localhost:3000`.

::: warning
Make sure your database is running before starting the app, otherwise the connection will fail.
:::

## Verify it's working

Open your browser and navigate to `http://localhost:3000`. You should see the app home screen.

If you run into issues, check the [FAQ](/guide/faq) or open an issue on GitHub.

## Next steps

Once installed, head to [Configuration](/guide/configuration) to customise the app for your needs.
