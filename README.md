# Swag Labs Automation

Sauce Demo e-commerce website automation testing using Playwright and Page Object Model (POM).

Project URL: [https://www.saucedemo.com/](https://www.saucedemo.com/)

## Author

[@Dihan07](https://github.com/Dihan07)

## Overview

This is a comprehensive test automation framework for the Sauce Demo e-commerce platform. The project implements three distinct test scenarios covering user authentication, shopping flow, and performance testing with different user types.

## Technologies Used

- **Playwright** - Modern end-to-end testing framework
- **JavaScript (ES6+)** - Programming language
- **Allure Reporter** - Test reporting and visualization
- **Page Object Model** - Design pattern for maintainable test code

## Prerequisites

- **Node.js** version 16 or higher
- **Java** version 8 or higher (required for Allure reports)

## Installation

### Clone the repository
```bash
git clone https://github.com/Dihan07/Swag-Labs-automation.git
```

### Navigate to project directory
```bash
cd Swag-Labs-automation
```

### Install dependencies
```bash
npm install
```

### Install Playwright browsers
```bash
npx playwright install
```

## Test Scenarios

### 1: Locked Out User Test
- Attempts login with `locked_out_user`
- Verifies the error message for locked accounts

### 2: Standard User Complete Flow
- Login with `standard_user`
- Reset application state
- Add 3 random items to cart
- Navigate through checkout process
- Verify product names and total price
- Complete purchase and verify success message
- Reset state and logout

### Q3: Performance Glitch User Test (30 marks)
- Login with `performance_glitch_user`
- Reset application state
- Filter products by name (Z to A)
- Add first product to cart
- Complete checkout process
- Verify product details and price
- Finish purchase and verify success
- Reset state and logout

## Running Tests

### Run individual test scenarios
```bash
# Run Q1 - Locked User Test
npm run locked-user

# Run Q2 - Standard User Test
npm run standard-user

# Run Q3 - Performance Glitch User Test
npm run glitch-user
```
### Run all tests in parallel
```bash
npm run swagLabs   
```

### Run tests in sequence
```bash
npm run test    
```

## Generating Reports

### Generate and open Allure report
```bash
npm run getReport   
```

## Configuration

The project uses Playwright configuration file (`playwright.config.js`) with the following settings:

- **Base URL**: https://www.saucedemo.com
- **Workers**: 1 (sequential execution)
- **Reporters**: HTML and Allure
- **Screenshots**: On failure
- **Videos**: On failure

## Test Data

Test credentials and billing information are stored in JSON files under the `resources/` folder:

- `loginData.json` - User credentials for different user types.
- `billingInformation.json` - Billing Information for checkout.

## Features

✅ Page Object Model design pattern  
✅ Reusable and maintainable code structure  
✅ Dynamic product selection with random indices  
✅ Comprehensive test coverage  
✅ Allure reporting with screenshots  
✅ Sequential test execution  
✅ Individual and batch test execution  


