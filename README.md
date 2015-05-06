# gulp-fibre-tasks
> Gulp tasks for fibres (your modules)

[![NPM](https://nodei.co/npm/gulp-fibre-tasks.png)](https://nodei.co/npm/gulp-fibre-tasks/)

## What is this?
[Gulp](http://gulpjs.com/) is a great build tool and we wanted to have a nice place where we place all our gulp tasks could live happily. 

## What's available?
- Linting with [eslint](https://www.npmjs.com/package/gulp-eslint) and [scss-lint](https://www.npmjs.com/package/gulp-scss-lint)
- Testing with [jasmine](https://www.npmjs.com/package/gulp-jasmine) and [karma](https://www.npmjs.com/package/karma)
- Full support for ES6 using [babel](https://www.npmjs.com/package/gulp-babel) and [isparta](https://www.npmjs.com/package/isparta)
- [Bump](https://www.npmjs.com/package/gulp-bump)'n'[tag](https://www.npmjs.com/package/gulp-tag-version)'n'push (no, that's _not_ an R Kelly song)
- Build for web and node using [webpack](https://www.npmjs.com/package/gulp-webpack)
- And more to come in the future...

## Usage
Rather than use the specific plugin tasks individually we use a grouped set to speed things up:

#### `gulp`
Starts watching your JavaScript and SCSS files, and runs karma, eslint, jasmine; and scss-lint, when a file changes respectively.

#### `gulp test`
Starts all the linters (eslint and scss-lint) and all the tests (jasmine for node and karma for web).

#### `gulp test:web`
Starts all the linters (eslint and scss-lint) and runs karma tests.

#### `gulp test:node`
Starts eslint and runs the jasmine tests.

#### `gulp bump:[patch|minor|major]`
Bumps your `package.json|component.json` (config can be found in the `config.js`), git commits, tags and pushes said tag to your current remote and branch.

#### `gulp build`
Tests and builds your fibre (module) for web **and** node; web output is webpacked and named `package.name + [chunkhash].js`, uglified and placed in `dist/` (all can be set in `config.js`), and node output is babel'd and placed in `lib/`

#### `gulp build:web`
Test and build your fibre (module) for the web.

#### `gulp build:node`
Test and build your fibre (module) for node.

#### `gulp karma:debug`
In addition to the standard `gulp karma` the `:debug` flag keeps karma alive so you can debug it using the open browser; all the code uses sourcemaps so if you're using ES6 you should see some nice code.

### License

The MIT License (MIT)
