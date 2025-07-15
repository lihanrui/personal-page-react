# Personal React Portfolio

A modern, responsive React single-page application portfolio site featuring:

- Home page with personal introduction and background
- Projects showcase
- Hobbies section
- Foster care information page
- Dark/Light theme support
- Modern glass-card UI components
- Responsive design

## Features

- Built with React and modern JavaScript
- Styled with Emotion and SCSS
- Configured with Webpack, Babel, ESLint, and PostCSS
- Responsive layout with mobile-first design
- Theme switching capability
- Glass-card UI components for modern aesthetics
- Code splitting with React.lazy for optimal performance

## Pages

- **Home** (`/`): Landing page with personal introduction and background
- **Projects** (`/projects`): Showcase of development projects
- **Hobbies** (`/hobbies`): Personal interests and activities
- **Fosters** (`/fosters`): Information about foster care involvement

## Installation

```shell
# clone this repository
$ git clone [your-repo-url]

# go into project directory
$ cd [project-directory]

# install dependencies
$ npm install
```

## Available Commands

### Development Server

```shell
$ npm start
```

Runs the development server on [http://localhost:3000](http://localhost:3000)

### Production Build

```shell
$ npm run build
```

Creates a production build. The build artifacts will be stored in the `dist/` directory.

### Deploy to GitHub Pages

First, update the homepage in package.json:

```json
{
  ...
  "homepage": "https://{github username}.github.io/{repository name}",
}
```

Then run:

```shell
$ npm run deploy
```

This will deploy the application to GitHub Pages.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
