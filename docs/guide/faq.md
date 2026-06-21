# FAQ

Common questions and answers from our users.

## The app won't start — what do I check first?

1. Make sure Node.js 18+ is installed (`node -v`)
2. Check that all environment variables in `.env` are filled in
3. Confirm your database is running and reachable
4. Try deleting `node_modules` and running `npm install` again

## I get a "connection refused" error

This usually means the database isn't running or the `DATABASE_URL` in your `.env` is incorrect. Double-check the connection string format:

```
postgresql://user:password@localhost:5432/dbname
```

## How do I reset my data?

```bash
npm run db:reset
```

::: warning
This will delete all data in your local database. Use with caution.
:::

## Where do I report a bug?

Open an issue on [GitHub](https://github.com/your-org/your-app/issues) with steps to reproduce the problem and your Node.js version.

## I have a question not listed here

Reach out to us at **support@yourcompany.com** or open a discussion on GitHub.
