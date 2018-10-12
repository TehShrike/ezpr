# ezpr

With one CLI command, does these things for you:

- pushes your current branch up to your repo
- opens the "open a pull request" page in your browser based on that branch you just pushed

## Install

```sh
npm i ezpr -g
```

## Use

```
ezpr [remote]
```

Takes a single argument for the remote name.  Defaults to the remote named `origin`.


```sh
# in any directory with a git repo
ezpr my-cool-remote
# or
ezpr
```

# License

[WTFPL](http://wtfpl2.com)
