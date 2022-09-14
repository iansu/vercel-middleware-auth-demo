# Auth

A Next.js app that sets a cookie after a password has been provided and then redirects to the [Dashboard](../dashboard) app.


> **Warning**
> This only provides limited protection and it's easy for users to duplicate the auth cookie. Make sure you understand the risks and tradeoffs before using this in a production application.

## Configuration

The cookie expiration and the list of valid passwords can be set in the [.env](.env) file. Note, if you want to keep the passwords out of source control you should set them as an environment variable in Vercel. In a real production app you should also set the cookie value to some secret value and check that value in the protected app.

The deployed dashboard and cookie URLs can be set in the [.env.production](.env.production) file.
