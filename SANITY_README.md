# Sanity Test Suite Documentation

## Overview

This document provides detailed information about the sanity test suite created for **the-internet.herokuapp.com** website. The sanity tests are designed to verify core functionality and basic user workflows across the application.

**Test File Location:** `tests/sanity.spec.ts`

---

## Test Suite Details

### Test Suite Configuration
- **Description:** The Internet - Sanity Tests
- **Tag:** `@sanity` (for easy filtering and execution)
- **Target Website:** https://the-internet.herokuapp.com/
- **Setup:** `beforeEach` hook navigates to homepage before each test

---

## Test Cases

### 1. Homepage Title Validation
- **Test Name:** `should load homepage and display title`
- **Purpose:** Verifies that the page title loads correctly
- **Assertions:** 
  - Page title contains "The Internet"
- **Expected Outcome:** ✅ PASS

### 2. Main Heading Display
- **Test Name:** `should display main heading`
- **Purpose:** Ensures main heading is visible and displays correct content
- **Assertions:**
  - h1 heading is visible
  - Heading contains text "Welcome to the-internet"
- **Expected Outcome:** ✅ PASS

### 3. Links List Presence
- **Test Name:** `should display list of available links`
- **Purpose:** Verifies that the list of available links is present on homepage
- **Assertions:**
  - List of links exists and is defined
  - Link count is greater than 0
- **Expected Outcome:** ✅ PASS

### 4. Navigation to Checkboxes Page
- **Test Name:** `should navigate to Checkboxes page`
- **Purpose:** Tests navigation functionality by clicking Checkboxes link
- **Steps:**
  1. Click on "Checkboxes" link
  2. Wait for URL to navigate to checkboxes page
  3. Verify h3 heading contains "Checkboxes"
- **Expected Outcome:** ✅ PASS

### 5. Navigation to Dropdown Page
- **Test Name:** `should navigate to Dropdown page`
- **Purpose:** Tests navigation to the Dropdown functionality page
- **Steps:**
  1. Click on "Dropdown" link
  2. Wait for URL to navigate to dropdown page
  3. Verify h3 heading contains "Dropdown List"
- **Expected Outcome:** ✅ PASS

### 6. Back Button Functionality
- **Test Name:** `should have working back navigation`
- **Purpose:** Validates that browser back button works correctly
- **Steps:**
  1. Navigate to Checkboxes page
  2. Click browser back button
  3. Verify return to homepage with correct heading
- **Expected Outcome:** ✅ PASS

### 7. Footer Verification
- **Test Name:** `should display footer with link to GitHub`
- **Purpose:** Ensures footer is present with proper links
- **Assertions:**
  - Footer element is visible
  - Footer contains at least one link
- **Expected Outcome:** ✅ PASS

### 8. Navigation to Inputs Page
- **Test Name:** `should handle navigation to Input page`
- **Purpose:** Tests navigation to the Inputs page
- **Steps:**
  1. Click on "Inputs" link
  2. Wait for URL to navigate to inputs page
  3. Verify h3 heading is visible
- **Expected Outcome:** ✅ PASS

### 9. Link Accessibility
- **Test Name:** `should verify all main links are accessible`
- **Purpose:** Validates that all main navigation links are visible and clickable
- **Assertions:**
  - Link count is greater than 0
  - First 5 links are visible
  - Each link has correct count (1)
- **Expected Outcome:** ✅ PASS

### 10. Responsive Design Verification
- **Test Name:** `should verify page is responsive`
- **Purpose:** Ensures main content is within viewport for responsive testing
- **Assertions:**
  - Main h1 heading is within viewport
- **Expected Outcome:** ✅ PASS

---

## Key Features

✅ **Comprehensive Coverage**
- Tests core functionality including navigation, visibility, and interactions

✅ **Tagged for Easy Filtering**
- Tagged with `@sanity` for running only sanity tests when needed

✅ **Setup & Teardown**
- Uses `beforeEach` hook to load homepage before each test

✅ **Playwright Best Practices**
- Uses modern locator strategies (getByText, getByRole, etc.)
- Comprehensive assertions using Playwright's expect API
- Proper wait conditions for navigation

✅ **Easy to Maintain**
- Clear test names and organized test cases
- Well-structured with comments where needed

---

## How to Run the Tests

### Run All Sanity Tests
```bash
npx playwright test tests/sanity.spec.ts
```

### Run Only Tests Tagged with @sanity
```bash
npx playwright test --grep "@sanity"
```

### Run in Headed Mode (see browser)
```bash
npx playwright test tests/sanity.spec.ts --headed
```

### Run on Specific Browser
```bash
npx playwright test tests/sanity.spec.ts --project=chromium
```

### Run with Debugging
```bash
npx playwright test tests/sanity.spec.ts --debug
```

### Generate HTML Report
```bash
npx playwright test tests/sanity.spec.ts
npx playwright show-report
```

---

## Test Configuration

The tests use the default Playwright configuration from `playwright.config.ts`:
- **Test Directory:** `tests/`
- **Reporters:** HTML report (default)
- **Retries:** 0 (on local), 2 (on CI)
- **Browsers:** Chromium, Firefox, WebKit
- **Parallel Execution:** Enabled locally, disabled on CI
- **Trace:** Collected on first retry

---

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Playwright and @types/node (specified in package.json)

### Install Dependencies
```bash
npm install
```

---

## Expected Results

All 10 test cases should pass when run against https://the-internet.herokuapp.com/

**Success Indicators:**
- ✅ All tests pass
- ✅ No timeout errors
- ✅ Page navigates correctly
- ✅ All assertions are satisfied

---

## Troubleshooting

### Tests Timing Out
- Check internet connectivity
- Verify the website is accessible at https://the-internet.herokuapp.com/
- Increase timeout in playwright.config.ts if needed

### Navigation Failures
- Verify the website structure hasn't changed
- Check for updated selectors if element locators fail
- Use `--headed` mode to visually debug

### Flaky Tests
- Ensure proper wait conditions are in place
- Network conditions may affect test reliability
- Consider adding retry logic for external websites

---

## Future Enhancements

- Add more specific test scenarios (form submission, etc.)
- Implement page object model for better maintainability
- Add performance metrics checks
- Implement custom reporters
- Add API-level validation tests

---

## Contact & Support

For issues or questions regarding the sanity test suite, refer to:
- Playwright Documentation: https://playwright.dev/docs/intro
- The Internet Website: https://the-internet.herokuapp.com/
- Test File: `tests/sanity.spec.ts`
