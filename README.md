# AbbTechTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/registration-form`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Production build

Run `npm run build:prod` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via a cypress.

## About the Project

### Technology Choices

- **Angular (latest version)**: This project utilizes Angular’s latest features, 
including control flow syntax, standalone components, Signals, 
and Signal store (NgRx) for state management. 
I chose Signals to gain practical experience with them, 
as I had not used them before.

- **Tailwind for styling**: I chose Tailwind for styling and copy-paste the form example from the official site.

- **Cypress for E2E Testing**: I have never used Cypress before as E2E testing tool, I have previously used Playwright.

> **Disclaimer**: I’m aware that Signals are still in developer preview and should not be used for production. I selected them for this project to try it myself.

### Folder Structure

- **cypress/** - Contains E2E test file and configurations.
- **dist/** - Standard output folder for the Angular build.
- **src/** - Main application folder:
    - **environment/** - Configuration files for environment variables.
    - **app/** - Core application folder:
        - **registration/** - Domain-specific folder for the registration functionality:
            - **data/** - Contains the service layer and Signal component store.
            - **model/** - TypeScript interfaces and models.
            - **registration-form/** - Main "smart" component for handling registration logic.
            - **ui/** - "Dumb" reusable components.
            - **utils/** - Utility functions and mock data.
        - **shared/** -  Contains reusable UI components, directives, services etc. can be shared across the application:
            - **loader/** - Contains reusable loading component.
            - **monitoring/** - Contains monitoring and logging service.
          

### Error Handling

For this prototype, basic error handling is in place. Errors from form submissions are 
managed within the component, and user-friendly messages are shown for validation errors.

### API Proxy Setup

Since the backend API and frontend project are served on different domains (different ports), a proxy configuration is used (`proxy.config.ts`) to bypass CORS restrictions during development.

### Logging and Monitoring

A `LoggerService` is included as a placeholder for future monitoring and logging needs.
This service can be expanded to support centralized logging and
error tracking as the project scales.

### Scalability Considerations

- **Component Design**: Components are designed to be small and reusable, making it easy to expand the project.
- **Service Layer**: Business logic, such as form submission, is handled in the service layer, keeping components focused on UI.
- **Form Handling**: Although reactive forms are generally more scalable, I decided for template-driven forms to explore their use in combination with Signals.
- **State Management**: A Signal component store is implemented as a lightweight state management solution for the form's state.

### Performance

To improve performance and follow best practices, lazy loading is implemented for the registration component, 
even though it may not be necessarily for this task.

### Testing

- **Unit Testing**: Unit tests are written for individual components and services to verify their functionality. 
Testing for the registration form component is not fully covered.

- **(E2E) Testing**: Cypress tests are written to cover both positive and negative scenarios.

### Next steps

- Complete and expand testing
- Improve component separation in registration form if needed
- Improve UI/UX and accessibility
- Implement CI/CD pipeline
