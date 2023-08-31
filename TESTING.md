# Testing

Return back to the [README.md](README.md) file.

In this section, I will present proof to demonstrate that:
- The project **features** work as intended
- The **users** can achieve their goals
- The project is **responsive** across different devices and screen sizes
- The project is **compatible** across different web browsers
- The project uses **valid code** according to standard practice
- The project passes audits for **performance, accessibility, best practices and SEO** (using Lighthouse by Chrome Developer Tools)


## Code Validation

I will use this space to discuss code validation of my code files (where applicable).

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftreggs1.github.io%2Fcode-institute-project2%2Findex.html) | ![screenshot](documentation/html-validation-home.png) | Section lacks header h2-h6 warning |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftreggs1.github.io%2Fcode-institute-project2) | ![screenshot](documentation/css-validation-style.png) | Pass: No Errors |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

If using modern JavaScript (ES6) methods, then make sure to include the following
line at the very top of every single JavaScript file (this should remain in your files for submission):

    /* jshint esversion: 11 */

If you are also including jQuery (`$`), then the updated format will be:

    /* jshint esversion: 11, jquery: true */

This allows the JShint validator to recognize modern ES6 methods, such as:
`let`, `const`, `template literals`, `arrow functions (=>)`, etc.

**IMPORTANT**: External resources

Sometimes we'll write JavaScript that imports variables from other files, such as an array of questions
from `questions.js`, which are used within the main `script.js` file elsewhere.
If that's the case, the JShint validation tool doesn't know how to recognize unused variables
that would normally be imported locally in your code.
These warnings are acceptable to showcase on your screenshots.

The same thing applies when using external libraries such as Stripe, Leaflet, Bootstrap, Materialize, etc..
To instantiate these components, we need to use their respective declarator.
Again, the JShint validation tool would flag these as undefined/unused variables.
These warnings are acceptable to showcase on your screenshots.

Sample JS code validation documentation (tables are extremely helpful!):

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](documentation/js-validation-script.png) | Unused variables from external files |
| questions.js | ![screenshot](documentation/js-validation-questions.png) | Pass: No Errors |
| quiz.js | ![screenshot](documentation/js-validation-quiz.png) | Unused variables from external files |
| stripe_elements.js | ![screenshot](documentation/js-validation-stripe.png) | Undefined Stripe variable |
| x | x | x | repeat for all remaining JavaScript files |


## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](documentation/browser-chrome.png) | Works as expected |
| Firefox | ![screenshot](documentation/browser-firefox.png) | Works as expected |
| Edge | ![screenshot](documentation/browser-edge.png) | Works as expected |


## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Screenshot | Notes |
| --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/responsive-mobile.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsive-tablet.png) | Works as expected |
| Desktop | ![screenshot](documentation/responsive-desktop.png) | Works as expected |
| Asus ROG Phone 5 (Android) | ![screenshot](documentation/responsive-android.jpg) | Works as expected |


## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![screenshot](documentation/lighthouse-home-mobile.png) | 1 warning for images with low resolution and PWA warnings |
| Home | Desktop | ![screenshot](documentation/lighthouse-home-desktop.png) | Only PWA warnings |


## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | User Action | Expected Result | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| Home Page | | | | |
| | Click on Start Game | Starts game generates puzzle output and activates event listeners on letter inputs | Pass | |
| | Click on Restart Game | Selects random word from array, resets variables to default, removes and reactivates event listeners on letter inputs and resets letter input styles to default | Pass | |
| | Click Instructions | Brings up instructions popup for the user to read instructions | Pass | User will have thee option to click Exit and close the popup |
| | Click Exit on instructions popup | Closes instructions popup and allows user to continue playing the game | Pass | |
| | Click on letter not in current puzzle | Letter background is changed to red, event listener is removed form that letter, 1 is deducted from guesses remaining and hangman image progresses to next step | Pass | |
| | Click on letter in current puzzle | Letter background is changed to green, event listener is removed from that letter, letter is reavealed in the correect position or positions if more than one occurence in current puzzle and 1 is deducted for each itteration of that letter in the current puzzle | Pass | |
| | Guesses Remaining reaches 0 before puzzle is solved | Hangman image will be at the final stage, game over popup will appear and all letter event listeners are removed | Pass | User will have the option of clicking New Game or Exit on the popup |
| | Game over popup click on New Game | Closes the game over popup, selects random word from array, resets variables to default, removes and reactivates event listeners on letter inputs and resets letter input styles to default | Pass | |
| | Game over popup click on Exit | Closes game over popup and allows user to review the current state of the game | Pass |  |
| | Letters Remaining reaches 0 and the puzzle is solved | You Win popup will appear and all letter event listeners are removed | Pass | User will have the option of clicking New Game or Exit on the popup |
| | You win popup click on New Game | Closes the you win popup, selects random word from array, resets variables to default, removes and reactivates event listeners on letter inputs and resets letter input styles to default | Pass | |
| | You win popup click on Exit | Closes you win popup and allows user to review the current state of the game | Pass |  |


## User Story Testing

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

Testing user stories is actually quite simple, once you've already got the stories defined on your README.

Most of your project's **features** should already align with the **user stories**,
so this should as simple as creating a table with the user story, matching with the re-used screenshot
from the respective feature.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature01.png) |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature02.png) |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature03.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature04.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature05.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/feature06.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature07.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature08.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/feature09.png) |
| repeat for all remaining user stories | x |

## Bugs

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

It's very important to document any bugs you've discovered while developing the project.
Make sure to include any necessary steps you've implemented to fix the bug(s) as well.

For JavaScript and Python applications, it's best to screenshot the errors to include them as well.

**PRO TIP**: screenshots of bugs are extremely helpful, and go a long way!

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

- JS Uncaught ReferenceError: `foobar` is undefined/not defined

    ![screenshot](documentation/bug01.png)

    - To fix this, I _____________________.

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

    ![screenshot](documentation/bug02.png)

    - To fix this, I _____________________.

- Python `'ModuleNotFoundError'` when trying to import module from imported package

    ![screenshot](documentation/bug03.png)

    - To fix this, I _____________________.

- Django `TemplateDoesNotExist` at /appname/path appname/template_name.html

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.

- Python `E501 line too long` (93 > 79 characters)

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.