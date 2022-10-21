This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This project is a part of stack exploration and pair programming.

### Stacks:

1. [NextJs](https://nextjs.org/)
2. [Redux toolkit](https://redux-toolkit.js.org/)
3. [Tailwindcss](https://tailwindcss.com/)
4. [ESLint](https://eslint.org/)

## Getting Started

To start working with this repository first `fork this repository` and clone `forked project` to your machine. Before any execution make sure to `add this remote repository`

```
$ git remote add [name for this remote i.e rizqyhbb] git@github.com:rizqyhbb/aegis.git
```

Check remote list for this repository and make sure there are at least 2 of it, 1 is origin (yours) and 1 is parent (i.e rizqyhbb)

```
$ git remote -v
```

```
origin    git@github.com:[yours]/aegis.git
rizqyhbb  git@github.com:rizqyhbb/aegis.git
```

Now you can start to install the dependencies, this project is pinned with [Volta](https://volta.sh/) and using [pnpm](https://pnpm.io/) as package manager, if you are trying to install node manually please refer to `package.json` to see what's the engine version this project

```
$ pnpm install
```

## Run the development server:

```bash
pnpm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Flow

Make sure to `fetch` the repository whenever you are starting to work to know the update for each remote repositories. And for any `new feature / bug fix` make sure to create branch from `develop` branch as it is for staging, `main` branch only used for production and `hot fix`

### New Feature and Bug Fix

Create branch from `develop` branch and name it as the feature suppose to be for example:

```bash
feature/login-page
# or
feature/add-account
# or
bugfix/login-page
```

### Commit

To create the best comit is to separate between work you've been done and use identifier below as your commit prefix

```
Add
Remove
Change
Fix
```

### Push changes

PUSHING CHANGES TO YOUR REMOTE ONLY, NOT PARENT OR OTHER REPOSITORIES

### Pull Request

After pushing your work, if it is `new feature / bug fix` create pull request to parent repo and target marge to `develop` branch

```
pull request
from feature/some-feature -> parent develop
```

if it is `hot fix` create pull request to parent repo and target merge to `main` branch

```
pull request
from hotfix/some-hotfix -> parent main
```

### PR Review & Merge

Make sure to ask review to all other members and the last member to approve the pull request have to merge it.
