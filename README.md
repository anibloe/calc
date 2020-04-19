# Calculator

## Developer instructions

1. Clone this repo.
2. `cd` into the root of the repo.
3. Run `npm install`.
4. Run `npm start`.
   The calculator will now be running locally on `localhost:8080`. Any changes to js files will result in hot reload.
5. Run `npm run-script build` to build into the `/dist` directory for production or serving to another web server.

## Files to review

### src/js/index.js

Responsible for initialising the calculator and controlling it's behaviour. It acts as the controller in this MVC framework.

### src/js/views/calcView.js

The view responsible for rendering and changing the display of the calculator.

### src/js/models/Calculator.js

The model, containing logic responsible for managing and making changes to the data used in the calculator.

### src/scss/styles.scss

SASS containing styles for the calculator.

### src/index.html

Empty page used to display the calculator.

### dist/css/styles.css

Styles for the calculator and calculations.php, compiled from the above SASS file.

### dist/js/bundle.js

Transpiled ES5 version of the src js code.

### dist/calculations.php

Reads the below CSV file into a table for display.

### dist/index.html

Compiled version of the blank HTML page used to render the calculator. This version has the link to `bundle.js`.

### dist/sums.csv

CSV file containing saved sums (dummy data for testing).
