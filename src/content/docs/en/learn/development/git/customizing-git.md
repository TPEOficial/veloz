---
title: Customizing Git
description: How to customize your Git
next:
  link: /en/learn/development/git/common-errors
  text: Common Errors
---

**Customizing Git**
=====================

### Global Configuration
---------------------

To configure your username and email globally, use the following commands:
- **Why do we set this up?** This data will be shown in the Git logs, and serves to identify the user who did it.

> [!NOTE]
> - Git will not validate the data entered.
> - To configure the username and email for a specific repository, navigate to the repository directory and use the commands without `--global`.

Configuring Username
```bash
$ git config --global user.name "Your Name"
```

Configuring Email
```bash
$ git config --global user.email "your_email@example.com"
```

These commands set the username and email at the global level, meaning they will apply to all Git repositories on your machine. If you want to configure this information only for a specific repository, omit the `--global` option.

### Verification
---------------------

To verify that the configuration has been set correctly, run the following command:

```bash
$ git config --global --list
```

<div class="tip custom-block" style="padding-top: 8px">
Press the letter <code>q</code> in <b>VIM</b> style to exit.
</div>

This will display a list of all the configuration settings, including the username and email.