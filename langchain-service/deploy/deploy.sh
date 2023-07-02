#!/bin/bash
pwd
python --version
python3 -m pip install --upgrade pip

cat /etc/*-release

sudo apt-get update
sudo apt-get install software-properties-common

# Add deadsnakes PPA
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt-get update

# Install the Python version you want
sudo apt-get install python3.11

pip install -r requirements.txt