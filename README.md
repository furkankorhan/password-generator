# password-generator
A simple password generator that runs in the browser.
Built this to practice JavaScript DOM manipulation and work with basic logic like loops and conditionals.

**Live demo:** https://furkankorhan.github.io/password-generator/

## Features
- Set password length (6 to 32 characters)
- Choose character types: uppercase, lowercase, numbers, symbols
- Copy to clipboard with one click
- Uses `crypto.getRandomValues()` instead of `Math.random()`
- No libraries, no frameworks - plain HTML, CSS and JavaScript

## How to use
Open `index.html` in any browser. Or use the live version:

```text
https://furkankorhan.github.io/password-generator/
```

## What I learned
- How to read and react to user input (checkboxes, sliders)
- How to build a string by looping and picking random characters
- Why password generation should use browser crypto APIs instead of `Math.random()`
- How to use `navigator.clipboard` to copy text
- How to deploy a static site with GitHub Pages

## Security note

This is a learning project, not a professional password manager. The main improvement was replacing `Math.random()` with `crypto.getRandomValues()` so the generated values come from the browser's cryptographic random source.

## What could be improved
- Show a password strength indicator
- Add an option to exclude confusing characters (0, O, l, 1)
- Save last used settings in localStorage

## Notes
Second small project while preparing for IT-Ausbildung applications in Germany.  
First project: [task-tracker-cli](https://github.com/furkankorhan/task-tracker-cli)
