#!/bin/bash
:<<EOF
Author: Vanessa Archambault
Contact: nessa@girldevelopit.com
Date 3-24-2015
========================================

Functionality:
    - Clone and install dependencies for our Girl Develop It San Jose repo

How to run:
	- change your directory to where you want to install the GDI repo/folder
	- paste this script into that folder
	- type this command into command line:
	sh macinstall.sh

	- if it asks for your computer password, enter it
	- when the script is done, open the index.html page from the cloned repo

Note:
    -  This will only work for Macs

EOF

########################################
#    Print Status of Installation
########################################
function print_good ()
{
# Prints Green    
    echo "\x1B[01;32m(>'-')>\x1B[0m $1"
}

function print_status ()
{
# Prints Blue
    echo "\x1B[01;34m(>'-')>\x1B[0m $1"
}
########################################
# End Status Functions
########################################


function clone_repo 
{
### clone repo
print_status "Cloning GDISJ repo"
git clone https://github.com/ghaida/gdisjc-website.git
print_good "repo cloned, changing directory"
cd gdisjc-website
}

function install_grunt_cli 
{
### install grunt CLI
print_status "Installing Grunt Command Line tools"
sudo npm install -g grunt-cli
print_good "Installed successfully"
}

function install_npm_bower
{
### Install bower through node package manager
print_status "Installing Bower through Node"
sudo npm install -g bower
print_good "Installed successfully"
}

function install_npm
{
### npm
print_status "Installing all NPM files listed in package.json"
sudo npm install
print_good "Installed Node packages successfully"
}

function install_bower
{
### bower
print_status "Installing all NPM files listed in package.json"
bower install
print_good "Installed Node packages successfully"
}

function start_grunt 
{
### grunt
print_status "Starting Grunt! Open your index.html page in your browser!"
grunt
}

clone_repo
install_grunt_cli
install_npm_bower
install_npm
install_bower
start_grunt