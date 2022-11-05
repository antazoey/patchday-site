# PatchDay Support Site

This code composes the support documentation website for PatchDay, the iOS app for managing HRT.

## Requirements

* Firebase CLI: https://firebaseopensource.com/projects/firebase/firebase-tools/
* A firebase account

## Development

In one terminal start the hot-loaders / webpack server by running:

```bash
npm start
```

Then, in another terminal, start the local host server by running:

```bash
npm run serve
```

**NOTE**: You will have to be logged into to Firebase in order to run this command.

Finally, point your browser at localhost:5002 to view the local site.

## Deployment

To deploy the site to production, run:

```bash
firebase deploy
```
