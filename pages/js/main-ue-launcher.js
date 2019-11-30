"use strict";

var fs = require("fs");
var os = require("os");
var p = require("path");
var spawn = require("child_process").spawn;
var SHARED = require(p.join(__dirname, "..", "shared", "functions"));
var getProjects = SHARED.getProjects;

var unrealEnginePath = "/storage/UnrealEngine/Engine/Binaries/Linux/UE4Editor"; ///TODO: Get real path.
var lastEngineLaunched;
var lastProjectLaunched;
var lastProjectLaunchedTime;


function createProjectList()
{
    var projectsAreaEl = document.getElementById("projects");
    var projects = getProjects();
    var defaultThumb = "imgs/default_game_thumbnail.png";
    
    projects.forEach(function (project)
    {
        var container = document.createElement("div");
        var img = document.createElement("div");
        var version = document.createElement("span");
        var name = document.createElement("div");
        
        function launch()
        {
            launchEngine(undefined, project.projectPath);
        }
        
        container.className = "project-container";
        //img.src = project.thumb || defaultThumb;
        img.style.backgroundImage = "url(\"" + (project.thumb || defaultThumb) + "\")";
        img.className = "project-img-box";
        version.textContent = "4.23"; ///TODO: Get actual verion number!
        version.className = "project-version";
        name.textContent = project.name;
        name.className = "project-name";
        
        //container.appendChild(img);
        img.appendChild(version);
        container.appendChild(img);
        container.appendChild(name);
        
        img.onclick = launch;
        name.onclick = launch;
        
        projectsAreaEl.appendChild(container);
    });
}

function launchEngine(engine, project)
{
    var args;
    var curTime = Date.now();
    
    engine = engine || unrealEnginePath
    
    if (!lastProjectLaunchedTime || curTime - lastProjectLaunchedTime > 5000 || lastProjectLaunched !== project || lastEngineLaunched !== engine) {
        lastProjectLaunched = project;
        lastProjectLaunchedTime = curTime;
        lastEngineLaunched = engine;
    
        if (project) {
            args = [project];
        }
        
        spawn(engine, args);
    }
}

createProjectList();

///TEMP: Launch button
document.getElementById("temp423Launch").onclick = function ()
{
    launchEngine();
};


/*
const { ipcRenderer } = require('electron')
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})
ipcRenderer.send('asynchronous-message', 'ping')
*/
