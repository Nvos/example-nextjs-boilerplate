# Startup

1. Install node (https://nodejs.org/en/)
2. Install yarn globally - npm install -g yarn
3. cd into root of frontend
4. run `yarn` command in root of project
5. Start dev mode by `yarn dev` then app should start at http://localhost:3000

# Useful links

https://github.com/developit/unfetch#caveats - dependency used internally for fetching
https://github.com/zeit/swr#global-configuration - fetching abstraction
https://nextjs.org/ - responsible for SSR, additionally provides simple styling and routing functionality. Thought styling lib provided is not very popular but more than enought for simple cases. If possible more advanced lib could be used e.g. `styled-components` or `emotion` (preferably emotion).

# Routes

To create new route create new file inside pages, file name will be used as path e.g. login file would be resolved to `http://localhost:3000/login`. If route requires authentication, wrap it with `withAuthSync` hoc when returning - take look at `protected` page

# Authentication

Token is saved into cookie under `token` field.
