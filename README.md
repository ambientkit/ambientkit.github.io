# Docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
# Install dependencies.
yarn

# Run website locally and opens up a browser window. Most changes are reflected
# live without having to restart the server.
yarn start

# Generate static content in the `build` directory.
yarn build

# Deploy via SSH.
USE_SSH=true yarn deploy

# Deploy without SSH. This is a convenient way to build the website and push to
# the `gh-pages` branch.
GIT_USER=<Your GitHub username> yarn deploy
```
