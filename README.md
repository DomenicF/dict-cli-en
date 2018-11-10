# dict-cli-en
> A command-line dictionary.

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

A very simple command-line dictionary that uses the Oxford Dictionary API. My goal is to re-discover Node and learn about ES-whatever-version-we're-on, along with command line applications in general. There are other dictionary tools out there that do the same thing and this one probably isn't as good as those -- this is strictly a learning project.

At the moment, I just wanted to get up and running and see how the API works so the code is a bit rudimentary.

## Installation

OS X & Linux:

```sh
npm install dict-cli-en --global
```

After that, obtain your API credentials from <https://developer.oxforddictionaries.com/>. 

Next, navigate to your `/usr/lib/node_modules/dict-cli-en` directory and copy the .env.example file to .env and fill in your credentials.

## Usage example

```sh
$ dict tree
Etymology: Old English trēow, trēo: from a Germanic variant of an Indo-European root shared by Greek doru ‘wood, spear’, drus ‘oak’

Definitions:
        • a woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.
        • a wooden structure or part of a structure.
        • a thing that has a branching structure resembling that of a tree.
```

## Release History
* 1.0.1
    * Added .env.example file.
* 1.0.0
    * First release.

## Meta

Domenic Fiore – domenicfiore@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/domenicf](https://github.com/domenicf/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dict-cli-en
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
