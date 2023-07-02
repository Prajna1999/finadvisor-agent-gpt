#!/bin/bash
pwd
python --version
python3 -m pip install --upgrade pip
python3 -m pip install pyenv
# Set the Python version you want to install
PYTHON_VERSION="3.11.0"  # Update this to the version you want

# Install the specified Python version using pyenv
pyenv install $PYTHON_VERSION

# Set the installed version as the default one
pyenv global $PYTHON_VERSION

# Verify the new Python version
python --version

pip install -r requirements.txt