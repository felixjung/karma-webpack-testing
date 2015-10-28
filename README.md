# Karma Webpack Testing
This is a minimum working example of using [webpack](http://webpack.github.io/) as a pre-processor when testing with
[karma](http://karma-runner.github.io/0.13/index.html).

I was having issues when setting up karma testing for a larger project relying
on webpack. Specifically, dependencies of my tests when [resolving with module
    paths](https://webpack.github.io/docs/resolving.html) did not work.

I set up this minimal working example to better understand where the problems
might stem from.
