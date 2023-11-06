# How to git sub-module?

### Add sub-module:

```bash
git submodule add <remote_url> <destination_folder>
```

### Pull sub-module:

```bash
git submodule update --init --recursive
```

### Update sub-module in project:

```bash
git submodule update --remote --merge
```

### Move a sub-module within project
```bash
git mv <source> <destination>
```


### More commands for sub-modules here:
https://devconnected.com/how-to-add-and-update-git-submodules/