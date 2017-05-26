# UnivNet frontend


## Prerequisites
1. nodejs
2. npm


## To install the prerequisites

### Linux

You may the .tar.xz file and install it from the [nodejs.org](https://nodejs.org/) web site. Alternatively you may use your package manager to install as follows

#### Ubuntu/Linux Mint/Debian
```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - && sudo apt install -y nodejs
```

#### RHEL/Fedora
```
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash - && yum -y install nodejs
```

#### Arch Linux
```
pacman -S nodejs npm
```

#### Gentoo
```
emerge nodejs
```

Other linux distrubitions may want to install the .tar.xz file as mentioned above

### macOS

You may simply download the Macintosh Installer direct from the [nodejs.org](https://nodejs.org/) web site or any of the following methods.

#### using Bash
```
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

#### using Homebrew
```
brew install node
```

#### using MacPorts
```
port install nodejs6
```

### Windows
You may simply download the Windows Installer direct from the [nodejs.org](https://nodejs.org/) web site or any of the following methods.

#### using Chocolatey:
```
cinst nodejs.install
```

#### using Scoop:
```
scoop install nodejs
```

## Site Dependencies
1. Angular 4
2. Zurb Foundation

## To install the site dependencies
Clone this repository and change to that directory
```
git clone https://github.com/UnivNet/frontend.git UnivNet-frontend && cd UnivNet-frontend
```
Then install the dependencies
```
npm install
```

## Running the server
To run the website on a local server
```
ng serve -H localhost -p 8000
```
Open the address localhost:8000 in a browser.
