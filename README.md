# Nice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

I set up this project to test (and compare) template driven forms with reactive forms approach.
In app.component.html there are two lines:

  <app-hobby-form [hobby2]="loadHobby()" (hobbyAdded)="addHobby($event)"></app-hobby-form>
  <!--<app-hobby-form-reactive [hobby]="loadHobby()" (hobbyAdded)="addHobby($event)"></app-hobby-form-reactive>-->
  
comment in <app-hobby-form> to see the template driven approach.
comment out <app-hobby-form> and comment in <app-hobby-form-reactive> to see the reactive forms approch. Outcome is the same, but source code differs.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
