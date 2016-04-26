# ember-cli-flexibility

The Ember addon was inspired by [ember-cli-autoprefixer](https://github.com/kimroen/ember-cli-autoprefixer "ember-cli-autoprefixer").

Drop this plugin into your app to automatically enable and process the [Flexibility](https://github.com/10up/flexibility "Flexibility")
polyfill to bring flexbox layouts to older versions of IE.

## What does it do?

The addon will postprocess your styles to add `-js-display: flex;` anywhere you are
using `display: flex`.

It is also compatible with preprocessors like [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass)
since it runs on the output css afterwards.

## How do I use it?

You just have to:

```
$ ember install ember-cli-flexibility
```

If you want the addon to run during every build there is no configuration needed.

If you'd like to enable / disable Flexibility processing per your build environments,
just add the following to your `ember-cli-build.js`:

```
var app = new EmberApp({
  flexibility: {
    enabled: true
  }
});
```

or

```
var app = new EmberApp({
  flexibility: {
    enabled: false
  }
});
```

## Dependencies

This plugin depends on:

* [broccoli-postcss](https://github.com/jeffjewiss/broccoli-postcss "broccoli-postcss")
* [postcss-flexibility](https://github.com/7rulnik/postcss-flexibility "postcss-flexibility")

## Contributing

If you find a bug or would like to add a feature please open an [Issue](https://github.com/migeorge/ember-cli-flexibility/issues)
and feel free to submit a [Pull Request](https://github.com/migeorge/ember-cli-flexibility/pulls).

## License

This addon was created by [Mike George](https://github.com/migeorge "Mike George - Github")
and released under The MIT License.

Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
