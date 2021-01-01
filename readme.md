# tmpin

> Add stdin support to any CLI app that accepts file input

It pipes stdin to a temp file and spawns the chosen app with the temp file path as the first argument.

Similar to [process substitution](https://en.wikipedia.org/wiki/Process_substitution) in ZSH/Bash, but cross-platform and without its [limitation](https://en.wikipedia.org/wiki/Process_substitution#Limitations).


## Install

```
$ npm install --global tmpin
```


## Usage

```
$ tmpin --help

  Usage
    echo <string> | tmpin <app> [<args>]

  Example
    git diff | tmpin atom

  Note that the first argument to <app> will be set to the temp file
```


## Tip

Create an alias in your `.zshrc`/`.bashrc`:

```sh
alias atom='tmpin atom'

# Or more specific
alias gda='git diff | tmpin atom'
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
