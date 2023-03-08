# Gemini Front End

**Gemini**, created by Ben Michael Oracion, is a robust capstone project designed to record, monitor, and analyze stock trading transactions. Its main purpose is to provide a comprehensive solution for investors to track their investments seamlessly. In addition, Gemini is expected to deliver real-time stock prices, candlestick analysis, and technical indicators in the future.

The platform boasts several exciting features, including the ability to record all stock transactions, providing a clear summary of all stock positions in the portfolio, and offering real-time stock price updates, technical indicators, and candlestick analysis through the screener tool. These features make Gemini a valuable tool for investors seeking to make informed investment decisions.

## Features

Transactions - Record all stock transactions

Portfolio - Summary of all Stock Position.

Screener - Real-time stock price update, technical indicators and candle stick analysis.

## Pending Items

- Clickable Individual Transaction through modal
- Fix notification body font style and color.
- Create a back end API Endpoint for Transaction that accepts arguments
- Create new HTTP Service for the 'single' transaction

## Future Features

- Change Bootstrap Theme Colors
- Log in for existing users
- Back end to be published in DigitalOcean 

## Completed Items

- ~~Create a Modal Service~~
- ~~Create a Modal Component~~
- ~~Add notification for Form Validation~~
- ~~Form Validation before submission~~
- ~~Toast Notification~~
- ~~Create Validation if the form is valid or not. Submit button must be disabled or unclickable if not valid or initial state.~~

## v1.4.0 (Display Transaction Details in Modal)

**03/08/2023 - 5:14PM**

This feature will display the details of the selected Transaction in to a modal.

- Created a Modal Component and Service
- Created a console.log to identify which row in Transaction List was clicked and return the ID, Ticker, Ave Unit Price.

## v1.3.1 (Notification Toast during Invalid Form Submission)

**03/08/2023 - 4:46PM**

- Instead of implementing form validation, I have implemented a toast to notify the user to verify the submitted form. Since the user cannot make a POST request if the form is invalid, using the button state is not an ideal or practical approach.

## v1.3.0 (Form Validation)

- This feature will enable disable the submit button depending if the Transaction Data is complete and ready for submission.

## v1.2.2 (Transaction Data Object Bug)

- **Fixed!** ~~Found bug at the Submit button when it still remembers the values you have submitted even if the forms are already cleared. Its as if the Transaction Object didn't clear the attributes.~~

## v1.2.1 (Toast Notifications)

**03/08/2023 - 1:07PM**

- Fixed Toast Notifications.
- Added dynamic color coding, body message and title for Toast Notifications

**Discovered Bugs**

- Found bug at the Submit button when it still remembers the values you have submitted even if the forms are already cleared. Its as if the Transaction Object didn't clear the attributes.

## v1.2.0 (Toast Notifications)

**03/07/2023 - 6:29PM**

- Added Toast Notifications if form submission is successful _(not working yet)_.

## v1.1.4

### Added or Changed

- Rearranged Transaction List to Newest to Oldest (Descending Order)
- Update Transaction List after button press Submit to include new transaction
- Added a clear() to reset all the input fields to its initial state after Submit button press event

## v1.1.3

### Added or Changed

- Added Quantity Component
- Added Share Price
- Modified the Transaction Data by removing Calculation in the FE and move to BE

## v1.1.2

### Added or Changed

- Added Broker Component
- Created a validation that only accepts 'AAA', 'Philstocks & 'Timson' as valid brokers.
- Added a Stock data Interface
- Added a Stock data Service
- Added a Ticker Component
- Created a validation for Ticker if not valid

## v1.1.1

### Added or Changed

- Improved the Transaction Data Service
- Moved the Transaction Object to Transaction Data Service for optimization
- Added Order Component

## v1.1.0

### Added or Changed

- Added a new Transactions Data Interface
- Added a new Transaction Data ervice
- Added Transaction Date Component
- Created Transaction Date Component

## v1.0.1

### Added or Changed

- Deleted all the components of Transactions Feature
- Started from scratch
