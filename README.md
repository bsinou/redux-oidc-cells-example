# redux-oidc sample app with Pydio Cells as identity provider

This project is a _manual_ fork from [redux-oidc-example](https://github.com/maxmantz/redux-oidc-example) to provide a sandbox to test the new OAuth feature of Pydio Cells v2.

It has been bootstrapped with [Create React App](https://github.com/facebook/create-react-app), updated to latest TP versions and instrumented to enable Redux Dev Tool for Chrome.

## Configure and launch

You must go through following steps:

- install a Cells instance
- update the `./src/providerConf.js` file to fit with your installation
- add the following block in the `staticClients` part of your `config.json` file

```json
{
  "client_id": "redux-oidc-cells-example",
  "client_name": "Test Cells as OIDC provider",
  "client_secret": "password",
  "grant_types": [
    "authorization_code",
    "refresh_token"
  ],
  "redirect_uris": [
    "http://localhost:3000/callback"
  ],
  "response_types": [
    "code",
    "token",
    "id_token"
  ],
  "scope": "openid email profile pydio offline"
}
```

Restart Cells, and you should be good to go!

```sh
npm install
npm start
```
