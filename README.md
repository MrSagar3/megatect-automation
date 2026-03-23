# Megatect Automation
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/MrSagar3/megatect-automation.git)

This repository contains a suite of end-to-end automated tests for the Megatech e-commerce website (`mega.com.np`). The tests are written using the Playwright framework and follow the Page Object Model (POM) design pattern for enhanced maintainability and readability.

## Features Tested
The test suite covers the following core e-commerce functionalities:

-   **Homepage:** Verifies that the main page loads correctly with the expected title.
-   **Product Search:** Tests the ability to search for products.
-   **Product Filtering:** Validates filtering products by a price range (min/max).
-   **Add to Cart:** Ensures products can be added to the shopping cart.
-   **Update Cart:** Tests the functionality to update the quantity of an item in the cart.
-   **Delete from Cart:** Verifies that products can be removed from the shopping cart.

## Technical Stack
-   **Framework:** [Playwright](https://playwright.dev/)
-   **Language:** [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   **Runtime:** [Node.js](https://nodejs.org/)

## Getting Started

Follow these instructions to set up the project and run the tests on your local machine.

### Prerequisites
-   [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
-   npm (comes bundled with Node.js)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/mrsagar3/megatect-automation.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd megatect-automation
    ```

3.  **Install project dependencies:**
    ```sh
    npm install
    ```

4.  **Install Playwright browsers:**
    ```sh
    npx playwright install
    ```

## Running the Tests

To execute the entire test suite, run the following command from the root of the project:

```sh
npx playwright test
```
The tests are configured in `playwright.config.js` to run in a headed browser by default.

### Viewing the Test Report

After the test execution is complete, an HTML report is generated. To view the report, run:

```sh
npx playwright show-report
```

## Project Structure

The project uses the Page Object Model (POM) design pattern to separate test logic from UI interaction details.

-   `tests/`: Contains the test specification files (e.g., `addToCart.spec.js`). Each file groups tests related to a specific feature.
-   `pages/`: Contains the Page Object classes (e.g., `AddToCart.js`). Each class models a page or a significant component of the application, encapsulating its elements and the user interactions with them.
-   `playwright.config.js`: The central configuration file for Playwright, defining settings such as the test directory, browser projects, and reporter options.
