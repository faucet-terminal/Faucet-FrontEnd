This is the frontend-app repo for the Faucet-ATM.  
 In the first version, we use [Next.js](https://nextjs.org/) as the fullstack framework , [nextui](https://nextui.org/) as our ui, and [Prisma](https://www.prisma.io/) as the ORM.

## Getting Started

First, git clone this project.

```bash
git clone https://github.com/Faucet-ATM/Faucet-FrontEnd.git //or
git clone git@github.com:Faucet-ATM/Faucet-FrontEnd.git
```
Copy the `.env.example` file and modify it to `.env`.
Then, make the necessary configuration changes.

Second, install all dependencies

```bash
pnpm install
```

Then, generate db Type

```bash
npx prisma generate
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contribute

If you are interested in this project, feel free to fork the project, write your code and commit, then request a push. We will also offer some bounty for your brilliant work and awesome ideas.

## Issue

If you encounter a bug or run into trouble, you can open an issue to share your experience or ask for help. We have already set up some labels to categorize your questions.


