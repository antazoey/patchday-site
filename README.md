# PatchDay Support Site

Contains the documentation for the PatchDay iOS app.

## Running locally

In one terminal start the hot-reloader:

```bash
npm run start
````

Then, in another terminal, run in a server:
 
```bash
npm run serve
```

Go to `localhost:5000` to see the site.

## Deployment

To deploy, do
 
 ```bash
npm run deploy
```
 
This first builds (outputs to `dist/`) and then deploys it using the `firebase` CLI.
