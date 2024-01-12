# DigitalLearning

# Login Credentials

Username: admin
Password: Admin@123

## Framework and Language Used:

The single-page application (SPA) has been developed using the Angular framework and TypeScript programming language. Angular is a powerful front-end framework that facilitates the creation of dynamic and responsive web applications. TypeScript is a superset of JavaScript that adds static typing, making it a robust choice for building scalable applications.

## Assumptions and Simplifications:

### Login Page:

The login page includes basic validation for the username and password fields.
Assumption: The login functionality doesn't involve server authentication; it's a client-side validation for the sake of demonstration.
Displaying Table of Records:

The data is fetched from a 'data.json' file to simulate a server request.
Assumption: The 'data.json' file contains an array of objects, each representing a record.
Deletion of Records:

Clicking the Delete button removes the selected record from the displayed table.
Assumption: Deletion is local and doesn't involve server-side operations.
Sortable Columns:

All columns in the table are sortable.
Assumption: Sorting is implemented on the client side, and the order is not persisted.
Draggable Rows:

All rows in the table are draggable.
Assumption: Drag-and-drop functionality is implemented using Angular CDK Drag and Drop and is for client-side reordering.

## Running the Code:

### Install Dependencies:

bash
git clone <repository-url>
cd <repository-folder>
npm install
Run the Application:
ng serve
The application will be accessible at http://localhost:4200/ by default.

### Access the Application:

Open a web browser and navigate to http://localhost:4200/. The login page will be displayed.

### Login:

Enter valid credentials (assumed to be predefined for demonstration purposes).
Click the submit button to proceed to the table of records.
Table of Records:

The table displays data fetched from 'data.json'.
Click on column headers to sort the table.
Drag rows to rearrange their order.
Click the Delete button on a row to remove the corresponding record.
Logout:

A logout option or button can be added for the sake of completeness (optional).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
