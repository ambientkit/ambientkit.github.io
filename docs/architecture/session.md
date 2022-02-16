# Session Manager

The session manager handles all aspects of a user session like:

- user login
- user logout
- checking if the user is authenticated
- storing data in the session for the user
- cross-site request forgery (CSRF) protection

This is one session manager plugin in the library:

- [scssession](https://github.com/ambientkit/plugin/tree/main/sessionmanager/scssession) - session management using [`alexedwards/scs`](https://github.com/alexedwards/scs)