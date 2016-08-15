NodeRT - Use WinRT/UWP APIs in node.js
=====

Please note: This is the npm package for NodeRT that let you use install/generate the modules easily from the command line, 
for the full documentation + examples, please refer to the official NodeRT documantation: https://github.com/NodeRT/NodeRT.

Create <a href="https://github.com/NodeRT/NodeRT">NodeRT</a> modules from the cmd line!

###Installation

Install locally using <b>npm install</b> or install globally by running:

```
npm install -g nodert
```

###Usage

Use the nodert package to generate NodeRT moduels on the fly!

Usage: 
```
nodert <command> [options]

Commands:
  install  Installs the required NodeRT modules

Options:
  -h, --help     Show help
  -m, --modules  The modules to generate, separated by a semi-colon
  -o, --outdir   The output directory path

Examples:
  "nodert install"
      Installs the NodeRT modules listed in the package.json file under the "_nodert.modules" 
      path in the local node_modules directory
  
  "nodert install -m  windows.devices.geolocation;windows.devices.sensors  -o c:\mydir\mycode"
  	Installs the windows.devices.geolocation and windows.devices.sensors NodeRT modules 
  	under the path: c:\myrdir\mycode
```  
 
###Install NodeRT modules using package.json

With the nodert npm package you can also specify you nodert dependencies in your package.json file and nodert will generate the listed modules for you!

Running <b>nodert install</b> without specifying the modules/namespaces will result with the nodert tool installing the list of modules that specified in the package.json file under the "_nodert/modules" path.

For example, having the following section in your package.json will result with the installation of the "windows.devices.geolocation" and "windows.devices.sensors" modules:

```json
...
"_nodert" : {
    "modules" : [
	  "windows.devices.geolocation",
	  "windows.device.sensors"
	]
  },
...  
```

