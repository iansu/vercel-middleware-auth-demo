# Vercel Middleware Auth Demo

An example that shows how you can use [Vercel Middleware](https://nextjs.org/docs/advanced-features/middleware) to control access to an app

This repo includes two apps:

- [Dashboard](./apps/dashboard): An app that you want to password protect
- [Auth](./apps/auth): An app that takes a password and sets a cookie to grant access to the dashboard

## Demo

[https://dashboard.vercel-middleware-auth-demo.iansutherland.dev](https://dashboard.vercel-middleware-auth-demo.iansutherland.dev)

You should be asked to login and then redirected back to the dashboard app. You can login with the passwords `password` and `secret`.

## Development

1. Run `npm install`
1. In one terminal window run `npm start -w auth`
1. In another terminal window run `npm start -w dashboard`
1. Go to [http://localhost:3000](http://localhost:3000)
