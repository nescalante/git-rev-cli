# git-rev CLI

[![Greenkeeper badge](https://badges.greenkeeper.io/nescalante/git-rev-cli.svg)](https://greenkeeper.io/)

CLI that uses [git-rev-sync](https://github.com/kurttheviking/git-rev-sync) to create a file with git rev info

## Install

```
npm install git-rev-cli -g
```

## Usage

From a Git repo:

```
git-rev VERSION
```

Will create a new file with that name with the Git rev info:

```
cat VERSION
{
  "commit": "foo",
  "tag": "bar",
  "branch": "baz",
  "date": "2000-01-01T00:00:00.000Z"
}%  
```

## License

MIT
