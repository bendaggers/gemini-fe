# Gemini Front End

## Features

Transactions - record all stock transactions
Portfolio - summary of portfolio.
Screener - real time stock price update.

## v1.3.1 (Notification Toast during Invalid Form Submission)

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

## Pending Items

- Clickable Individual Transaction through modal

## Future Features

- Change Bootstrap Theme Colors
- Log in for existing users

## Completed Items

- ~~Add notification for Form Validation~~
- ~~Form Validation before submission~~
- ~~Toast Notification~~
- ~~Create Validation if the form is valid or not. Submit button must be disabled or unclickable if not valid or initial state.~~
