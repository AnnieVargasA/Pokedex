# Project Structure

Below is an overview of the main folders and files in this project:

```
pokedex/
├── angular.json           # Angular CLI configuration
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
├── tsconfig.json          # TypeScript configuration
├── src/                   # Main source code
│   ├── index.html         # Main HTML entry point
│   ├── main.ts            # Angular bootstrap file
│   ├── styles.scss        # Global styles entry
│   ├── app/               # Root Angular app files (bootstrap, config, module, routes)
│   ├── assets/            # Static assets and translation files (en.json, es.json)
│   ├── components/        # Angular components (pokedex, pokemon-card, search-form, etc.)
│   ├── model/             # TypeScript interfaces/models (e.g., pokemon.model.ts)
│   ├── services/          # Angular services (API, business logic)
│   └── sass/              # Main Sass styles folder (7-1 architecture)
│       ├── __main.scss    # Imports all Sass partials
│       ├── abstracts/     # Sass mixins, functions, and helpers
│       ├── base/          # Variables, base styles, and typography
│       ├── components/    # Individual component styles
│       ├── layout/        # Layout and grid styles
│       ├── pages/         # Page-specific styles
│       ├── themes/        # Color themes or skin options
│       └── vendors/       # Third-party or vendor styles
```

**Brief description of key folders:**

- `src/app/`: Main Angular app code (bootstrap, configuration, root module, routes).
- `src/assets/`: Static assets and translations (`en.json`, `es.json`).
- `src/components/`: Reusable Angular components (Pokedex, Card, Search, etc.).
- `src/model/`: TypeScript interfaces and models for strong typing.
- `src/services/`: Angular services for business logic and API consumption.
- `src/sass/`: 7-1 Sass architecture for global and component styles.
- `src/sass/base/`: Variables, base styles, and typography.
- `src/sass/components/`: Styles for each specific component.
- `src/sass/abstracts/`: Reusable Sass mixins and functions.
# Pokedex

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
