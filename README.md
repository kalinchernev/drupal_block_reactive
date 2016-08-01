# Drupal Block Reactive (codename Hipster)

[Drupal 8](https://www.drupal.org/8) module creates a block with recent comments. Displayed dynamically using [React.js](https://facebook.github.io/react/).

[ES2015 (ES6)](https://babeljs.io/docs/learn-es2015/) is used via Babel and npm scripts.

The goal of the module is to be as simple as possible: minimum dependencies, tools and steps to actually write ES6 code that works. 
This way, developers can play easily without too much hassle of setting up webpack for example.

## Requirements
- [node.js](https://nodejs.org/en/download/) for using npm. The internal API is based on Views.
- npm for package management (comes with node.js)
- working [Drupal 8](https://www.drupal.org/project/drupal) project
- command line to make your life easier

## Installation
1. Go to the /modules folder in your Drupal 8 project (normally DRUPAL_ROOT/modules)
2. Clone this repository (or download a zip with the source)
3. Enable the Drupal module by `drush pm-enable drupal_block_reactive` or [via the UI](https://www.drupal.org/documentation/install/modules-themes/modules-8)
4. Go to the block management page '/admin/structure/block' and find/place the custom module 'Recent comments (reactive)'
5. Go to the page where you placed the block and you should see 'No comments.' message in a block.

Now, play with the reactivity by splitting the window into 2 and posting a comment from one to the other. The expected modern behavior :)

If you want to modify the /js, run `npm install` to download dependencies and `npm run dev` to write ES6 code in watch mode.

## Demo

![ScreenShot](https://raw.github.com/kalinchernev/drupal_block_reactive/master/screenshot.gif)

## Inspirations

- [Drupal React Block](https://github.com/blackwood/drupal-react_blocks) (same idea for Drupal 7)
- [React.js tutorial](https://facebook.github.io/react/docs/tutorial.html)
- [Powering Up With React](https://www.codeschool.com/courses/powering-up-with-react)
