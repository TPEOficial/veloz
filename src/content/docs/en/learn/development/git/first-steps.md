---
title: First Steps
description: Installation and use.
---

**First Steps**
=====================

### Installation and Setup

1. **Install Git**:
> [!NOTE] You can use the Git installer in Windows.
> - Download the Git installer from the official Git website.
> - Link: https://git-scm.com/download/win
> - Run the installer and follow the prompts to install Git.

::: code-group
```sh {1} [Windows]
# Source: https://git-scm.com/download/win
$ winget install --id Git.Git -e --source winget
```
```sh {1} [Linux]
# Source: https://git-scm.com/download/linux
# For Ubuntu.
$ sudo apt-get install git
```
```sh {1} [Mac]
# Source: https://git-scm.com/download/mac
# Using Homebrew.
$ brew install git

# Using MacPorts.
$ sudo port install git
```
:::

2. **Verify Git Installation**:
<div class="tip custom-block" style="padding-top: 8px">
You may need to restart the computer/program or open a new terminal for it to detect Git.
</div>

- Open a terminal and type `git --version`. This should display the version of Git installed on your system.

### Basic Git Commands

1. **Initialize a New Git Repository**:
   - Navigate to the directory where you want to create a new Git repository.
```sh
$ cd C:/users/veloz/dev/project_name
```
```
.
├─ src
│  └─ ...
└─ README.md
```
   - Run `git init` to initialize a new Git repository.

2. **Add files to the Staging Area**:
   - Navigate to the directory of your Git repository.
   - Run `git add <file_name>` to stage a specific file.
   - Run `git add .` to stage all files in the current directory.

3. **Commit changes**:
   - Run `git commit -m "commit_message"` to commit the staged changes with a commit message.
<div class="tip custom-block" style="padding-top: 8px">
Remember to put a message describing the changes (commit).
</div>

4. **View commit history**:
   - Run `git log` to view the commit history of your repository.

5. **Create a new branch**:

The difference between **"main"** and **"master"** is primarily one of nomenclature and culture. Both refer to the main branch of a repository in Git. **"Master"** is the older, default term, while **"main"** on GitHub is a newer alternative that avoids possible negative connotations. You can call it whatever you want, as it's just a naming convention.
   - Run `git branch <branch_name>` to create a new branch.
   - Run `git checkout <branch_name>` to switch to the new branch.

6. **Merge branches**:
   - Run `git checkout master` to switch to the main branch.
   - Run `git merge <branch_name>` to merge the changes from the new branch into the main branch.

7. **Push changes to a remote repository**:
   - Run `git remote add origin <repository_url>` to link your local repository to a remote repository.
::: details Example using GitHub
````sh
$ git init
$ git add origin https://github.com/TPEOficial/veloz.git
````
:::
   - Run `git push -u origin master` to push the changes to the remote repository.

### Additional tips

1. **Clone repository**:
 - Run `git clone <repository_url>` to clone a repository on your machine.
> [!TIP] You can specify a path to store it.
> - Run `git clone <repository_url> <path>` to clone a repository on your machine in a path.
> - If you put `.` in `path` it will be saved without creating a new folder.

2. **Undo changes**:
   - Run `git reset --hard` to undo all changes and go back to the last commit.

3. **View unstaged changes**:
   - Run `git status` to view the changes that are not yet staged.

4. **View staged changes**:
   - Run `git diff --cached` to view the changes that are staged.

5. **View uncommitted changes**:
   - Run `git diff` to view the changes that are not yet committed.