<h1>Unofficial Unreal Marketplace Downloader</h1>

<strong><pre>This is a work in progress.</pre></strong>

This project is an unofficial Marketplace downloader for <a href="https://www.unrealengine.com/">Unreal Engine </a> for those who Hate Epic Games (apart from UE) and don't want to have to download EGL to download assets from the UE Marketplace and for those on <strong>Linux</strong>.

Platforms: Windows & Linux.

<h2>Features</h2>

The launcher is incomplete; however, it should be able to preform most of the important tasks.

It can launch projects as well as download and install assets and plugins from the <a href="https://www.unrealengine.com/marketplace/en-US/store">UE4 marketplace</a>.

It does not yet install the UE4 engine. So, you need to <a href=https://docs.unrealengine.com/en-US/GettingStarted/Installation>manually install</a> that first. Also, two-factor support has not yet been tested.

There are probably many bugs still, so please <a href="https://github.com/nmrugg/UE4Launcher/issues/new">file an issue</a> if you have a problem.

<h2>Screenshots</h2>

Login Screen
![Alt Login Screen](docs/images/0-login.png)

My Projects
![Alt My Projects](docs/images/1-my-projects.jpg)

Add Assets Menu
![Alt Add Assets Menu](docs/images/2-asset-menu.jpg)

Downloading Assets
![Alt Downloading Assets](docs/images/3-downloading-asset.jpg)

Asset Installed in UE4
![Alt Asset Installed](docs/images/4-in-ue4.jpg)

Learn Tab
![Learn Tab](docs/images/5-learn-tab.jpg)

<h2>Installation</h2>

First, install <a href=https://nodejs.org/en/download/>node.js</a>.

Then pull the project:
```bash
git clone https://github.com/nmrugg/UE4Launcher.git
```

Change directory:
```bash
cd UE4Launcher
```

Install the dependencies:
```bash
npm i
```

Run the launcher:
```bash
npm start
```

Hope for the best.

<h2>Updating</h2>

After installing, to update the launcher, simply run this in the UE4Launcher directory:

```bash
git pull
npm i
```

<h2>Thanks</h2>

Since I don't use Windows or macOS, I've never used the official UE4 launcher. So, these open source projects were invaluable to help me understand how the launcher worked.

 * https://github.com/Allar/ue4-mp-downloader
 * https://github.com/neutrino-steak/UE4LinuxLauncher
