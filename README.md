# NextJS Dashboard

This is a NextJS 13 Typescript pnmp based frontend dashboard using Vercel's dashboard layout and auth mechanism and navbar. It implements a PaaS style layout such that users can deploy serverless functions linked to github repos in the projects tab and route of the dashboard. The UI is designed to mimic Vercel's UI.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- User Authentication using NextAuth
- Dashboard with Projects and Deployments tabs
- Ability to create, delete and deploy projects linked to Github repos
- Serverless function deployments

## File Structure

- pages: Contains all the pages of the application
- components: Contains reusable components
- lib: Contains utility functions and hooks for authentication, projects and deployments
- styles: Contains all the CSS modules
- public: Contains static files like images

## Dependencies

- NextJS
- TypeScript
- pnmp
- Vercel
- NextAuth
- Github API
- Serverless Functions API

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)