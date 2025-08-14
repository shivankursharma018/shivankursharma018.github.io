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
