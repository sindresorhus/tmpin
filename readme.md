# tmpin [![Build Status](https://travis-ci.org/sindresorhus/tmpin.svg?branch=master)](https://travis-ci.org/sindresorhus/tmpin)

> Add stdin support to any CLI app that accepts file input

It pipes stdin to a tempfile and spawns the chosen app with the tempfile path as the first argument.

Similar to [process substitution](http://en.wikipedia.org/wiki/Process_substitution) in ZSH/Bash, but cross-platform and without its [limitation](http://en.wikipedia.org/wiki/Process_substitution#Limitations).


## Install

```sh
$ npm install --global tmpin
```


## Usage

```
$ tmpin --help

  Usage
    echo <string> | tmpin <app> [<args>]

  Example
    git diff | tmpin atom

  Note that the first arg to <app> will be set to the tempfile
```


## Tip

Create an alias in your `.zshrc`/`.bashrc`:

```sh
alias atom='tmpin atom'
# or more specific
alias gda='git diff | tmpin atom'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
