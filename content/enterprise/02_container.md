---
title: Pre-Configured Headless Container
slug: container
---
## Summary

Our pre-configured Docker container will run Sakuli in an isolated environment which ensures having the same setup and equal conditions for every test-run.
You don´t need an unlocked display for native UI interaction with the headless VNC image configured in every container. You can watch your test execution live in a browser or a VNC client any time for debugging purposes.

## Benefits:

- Always rely on the same environment: no cookie hassle, no active user sessions, no artefacts of old tests
- Scale your tests: run multiple instances of your container in parallel to accelerate overall execution time or simulate heavy load on your application
- CI/CD: Easily integrate your tests into your continuous integration environment
- The layout and scaling of websites and native applications will always be the same and therefore increases the liability of native interactions
- Orchestrate, execute and alter your Test Container within the Sakuli UI portal

## Architecture of Sakuli containers

Each Sakuli docker image is installed with the following components:

- Operating system Ubuntu xxx
- Desktop environment (Xfce4)
- VNC-Server (default VNC port 5901)
- noVNC - HTML5 VNC client (default http port 6901)
- Node.js
- Mozilla Firefox
- Google Chrome
- Sakuli in the latest stable version

The running container is accessible with VNC (default password: sakuli) by:

- VNC viewer: DOCKER_HOST:5901
- noVNC HTML5 client: http://localhost:6901/vnc_auto.html?password=sakuli

## What is included?

Sakuli Container package ships with:

- Pre-Configured Docker Container
- Container image:
  - Latest stable release of Ubuntu x.x.x
  - Security patches
  - Latest stable release of noVNC
  - etc.