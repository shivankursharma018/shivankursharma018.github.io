---

## **Description**

In a recent hackathon project, our team faced issues when we couldn't replicate each other's Python environments — mainly because we didn’t use virtual environments and forgot to track installed libraries. Here's how you can avoid that disaster, and a simple bash script to automate updating your `requirements.txt` file!

---

# **How We Messed Up in a Hackathon**

A few weeks ago, I participated in a hackathon.  
We worked hard, divided modules, coded all night.  
But when it was time to merge and test the project — **boom, environment errors everywhere**.

Why?

* Some team members didn’t use a virtual environment (`venv`).
    
* We installed libraries manually without keeping track.
    
* We forgot to update `requirements.txt`.
    
* Replicating the environment across machines became a nightmare.
    

**Lesson learned:**  
👉 **Not tracking dependencies properly kills collaboration.**

---

# **Why You Must Track Dependencies**

When you install a library like `requests`, pip also installs its **dependencies** (`urllib3`, `certifi`, etc.).  
If you don't track them, reproducing your project later becomes impossible.

Keeping an updated `requirements.txt` ensures:

* Others can recreate your environment.
    
* Deployment on production servers is smooth.  
    

---

# **The Solution: Automate It**

Instead of manually adding libraries to `requirements.txt`,  
let’s automate it with a simple Bash script.

This script:

* Installs your new libraries.
    
* Automatically updates `requirements.txt`.
    
* Works on both **Windows** (Git Bash/WSL) and **Linux/Mac**.
    

Save this as [`pip-requirements-update.sh`](http://pip-requirements-update.sh):

```bash
# detects OS
OS=$(uname -s)

activate_venv() {
    if [ "$OS" = "Linux" ] || [ "$OS" = "Darwin" ]; then
        source venv/bin/activate
    elif [[ "$OS" == MINGW* || "$OS" == CYGWIN* ]]; then
        source venv/Scripts/activate
    else
        echo "Unsupported OS: $OS"
        exit 1
    fi
}

# create venv if not exists
if [ ! -d "venv" ]; then
    echo "No virtual environment found. Creating one..."
    python -m venv .venv
fi

activate_venv
pip freeze > before.txt
pip install "$@"
pip freeze > after.txt
diff before.txt after.txt | grep ">" | sed 's/> //' >> requirements.txt

sort -u requirements.txt -o requirements.txt
rm before.txt after.txt

echo "✅ Installation complete and requirements.txt updated!"
```

---

# 📋 **How to Use**

1. Save the script in your project root.
    
2. Make it executable:
    
    ```bash
    chmod +x pip-requirements-update.sh
    ```
    
3. Install new packages like this:
    
    ```bash
    ./pip-requirements-update.sh flask requests
    ```
    

---

# ⚡ **Why This Script Gives You an Edge**

| Traditional Way | Using This Bash Script |
| --- | --- |
| Install package manually with `pip install` and remember to freeze later. | Install + freeze automatically in one command. |
| Risk of forgetting to update `requirements.txt`. | Always up-to-date `requirements.txt`. |
| Higher chance of human error and missed dependencies. | Zero manual errors, complete tracking. |
| Time wasted in manual maintenance. | Fast, one-click maintenance. |
| Unprofessional repos. | Clean, production-ready repos. |
