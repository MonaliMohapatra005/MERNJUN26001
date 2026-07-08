## What is Git?

Git is a **Version Control System (VCS)** that helps developers track changes in their code, collaborate with others, and maintain different versions of a project.

### Benefits of Git

- Tracks code changes
- Maintains version history
- Supports team collaboration
- Allows reverting to previous versions
- Helps manage large projects efficiently

---

# What is GitHub?

GitHub is a cloud-based platform that allows developers to store, manage, and collaborate on Git repositories online.

### Benefits of GitHub

- Online code storage
- Team collaboration
- Pull Requests (PRs)
- Issue tracking
- Project management
- CI/CD integrations
- Portfolio showcasing

---

# Important Git Commands

## 1. Check Git Version

```bash
git --version
```

Displays the installed Git version.

---

## 2. Configure Git

Set your username:

```bash
git config --global user.name "Your Name"
```

Set your email:

```bash
git config --global user.email "your@email.com"
```

Check configuration:

```bash
git config --list
```

---

## 3. Initialize a Repository

```bash
git init
```

Creates a new Git repository in the current folder.

---

## 4. Check Repository Status

```bash
git status
```

Shows:

- Modified files
- New files
- Staged files
- Untracked files

---

## 5. Add Files to Staging Area

Add a specific file:

```bash
git add filename
```

Add all files:

```bash
git add .
```

---

## 6. Commit Changes

```bash
git commit -m "Initial Commit"
```

Saves a snapshot of the staged changes.

Example:

```bash
git commit -m "Added login page"
```

---

## 7. View Commit History

```bash
git log
```

Shows all commits made in the repository.

Short version:

```bash
git log --oneline
```

---

## 8. Connect Local Repository to GitHub

```bash
git remote add origin REPOSITORY_URL
```

Example:

```bash
git remote add origin https://github.com/username/project.git
```

Check remote:

```bash
git remote -v
```

---

## 9. Push Code to GitHub

First push:

```bash
git push -u origin main
```

Regular push:

```bash
git push
```

Uploads local code to GitHub.

---

## 10. Clone a Repository

```bash
git clone REPOSITORY_URL
```

Example:

```bash
git clone https://github.com/username/project.git
```

Downloads a GitHub repository to your computer.

---

## 11. Pull Latest Changes

```bash
git pull origin main
```

Downloads and merges the latest changes from GitHub.

---

## 12. Fetch Changes

```bash
git fetch
```

Downloads changes without merging them.

---

## 13. Create a New Branch

```bash
git branch feature-login
```

---

## 14. View All Branches

```bash
git branch
```

---

## 15. Switch Branch

```bash
git checkout feature-login
```

Or:

```bash
git switch feature-login
```

---

## 16. Create and Switch Branch

```bash
git checkout -b feature-login
```

Or:

```bash
git switch -c feature-login
```

---

## 17. Merge Branch

```bash
git merge feature-login
```

Combines changes from one branch into another.

---

## 18. Delete Branch

```bash
git branch -d feature-login
```

---

# Git Workflow

### Step 1: Create Repository

```bash
git init
```

### Step 2: Add Files

```bash
git add .
```

### Step 3: Commit Changes

```bash
git commit -m "Project Setup"
```

### Step 4: Connect GitHub Repository

```bash
git remote add origin REPOSITORY_URL
```

### Step 5: Push Code

```bash
git push -u origin main
```

---

# Common Interview Questions

### What is Git?

Git is a distributed version control system used to track changes in source code.

### What is GitHub?

GitHub is a cloud platform used to host Git repositories and collaborate on projects.

### Difference Between Git and GitHub?

| Git | GitHub |
| --- | --- |
| Version Control System | Hosting Platform |
| Works locally | Works online |
| Tracks code changes | Stores repositories |

### What does `git add .` do?

Adds all modified and new files to the staging area.

### What does `git commit -m` do?

Creates a snapshot of staged changes with a message.

### What does `git push` do?

Uploads local commits to GitHub.

### What does `git clone` do?

Copies a remote repository to a local machine.

### What is a Branch?

A branch is an independent line of development that allows developers to work on features without affecting the main code.

### What is a Pull Request (PR)?

A Pull Request is a request to merge code changes from one branch into another branch.

---

# Basic Commands Cheat Sheet