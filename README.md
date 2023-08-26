# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

TODO:

/profile (need to add from the api https://strangers-things.herokuapp.com/api/#top-of-page)

(This is a minimum; student could have more than just these routes. These routes may be named as they wish)

Unauthenticated user should be able to:

- See a list of all posts
- Sign up for an account with username and password
- Sign in with correct username/password combination

Unauthenticated user should NOT be able to:

- Create a new post
- Delete any post
- Send a message to the author of any post

Authenticated user should be able to:

- Create a new post
- Delete a post for which they are the author
- Send a message to the author of any post for which they are not the author
- See all messages for any post for which they are the author
- See all messages they've received in a special view

Authenticated user should NOT be able to:

- Delete posts for which they are not the author
- Send a message to themselves

All users should be able to filter posts with a simple text matcher (no fetch call needed here).
