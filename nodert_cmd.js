#!/usr/bin/env node

var nodert = require('./nodert_wrapper.js');
var argv = require('yargs').usage('Usage: nodert <command> [options]')
    .default({h : true})
    .command('install', 'Installs the required NodeRT modules')
    .example('nodert install', 'Installs the NodeRT modules listed in the package.json file under the "_nodert.modules" path in the local node_modules directory')
    .example('nodert install -m windows.devices.geolocation;windows.devices.sensors -o C:\\mydir\\mycode', 'Installs the listed NodeRT modules in the given output path')
    .alias('m', 'modules')
    .nargs('m', 1)
    .describe('modules', 'The modules to generate, seperated by a semi-colon')
    .alias('o', 'outdir')
    .nargs('o', 1)
    .describe('outdir', 'The output directory path')
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2016')
    .argv;

var cmd = argv['_'][0];

if (cmd != 'install') {
  console.error('Unssuported command: ', cmd);
  process.exit(1);
}

var modules;

if (argv['modules']) {
  modules = argv['modules'].split(';');
}

outdir = argv['outdir'];

if (argv['outdir']) {
  outdir = argv["outdir"];
}

function completionCb(err) {
  if (err) {
    console.error("Error occured during NodeRT modules installation: ", err);
    process.exit(1);
  }
  else { 
    console.info("Finished installing NodeRT modules");
  }
}

if (modules) {
  nodert.generateModules(modules, outdir, completionCb);
}
else {
  nodert.generateFromPackageJson(outdir, completionCb);
}

