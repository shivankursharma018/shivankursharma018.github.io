## 🐍 Setting Up a Python Virtual Environment

- When you work in Python projects you probably should use a virtual environment (or a similar mechanism) to isolate the packages you install for each project.
- A virtual environment is different than an environment variable.
- An environment variable is a variable in the system that can be used by programs.
- A virtual environment is a directory with some files in it.

---
## 🚀 Setup Instructions

1. Navigate to Your Project Directory
<hr>
```bash
cd
mkdir project
cd project
```

2. Create a Virtual Environment
<hr>
```bash
python -m venv .venv
```

3. Activate the Virtual Environment
- Do this every time you start a new terminal session to work on the project.
- Every time you install a new package in that environment, activate the environment again.


Windows
```bash
.venv\Scripts\Activate.ps1
```

Linux/macOS
```bash
source .venv/bin/activate
```

4. Check the Virtual Environment is Active

Windows
```bash
Get-Command python
```

Linux/macOS
```bash
which python
```

5. Upgrade pip
```bash
python -m pip install --upgrade pip
```

6. Add .gitignore
- If you are using Git (you should), add a .gitignore file to exclude everything in your .venv from Git.

7. Deactivate the Virtual Environment
```bash
deactivate
```

---
## Notes

### Where are packages installed
When you install Python, it creates some directories with some files in your computer.

Some of these directories are the ones in charge of having all the packages you install.

Then it will extract all those files and put them in a directory in your computer.

By default, it will put those files downloaded and extracted in the directory that comes with your Python installation, that's the global environment.


### What are virtual environments
The solution to the problems of having all the packages in the global environment is to use a virtual environment for each project you work on.

A virtual environment is a directory, very similar to the global one, where you can install the packages for a project.

This way, each project will have its own virtual environment (.venv directory) with its own packages.


