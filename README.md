# Angular Interceptor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Project Summary

This Project is build to understand Angular Interceptors.

Here I have Developed a interceptor that appends a header X-Authorization which contains a secret token(it has to be a JWT Token, but for learning purpose  assume a fixed literal) to all outgoing requests.

I have used [JsonPlaceHolder](https://jsonplaceholder.typicode.com/) API for data.
