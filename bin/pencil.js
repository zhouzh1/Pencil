/**
 * entry point
 */

const path = require('path');
const fse = require('fs-extra');
const help = require('./help');
let argvs = process.argv.slice(2);
if (argvs.length === 0) {
	help.help();
	process.exit();
}
else if (fse.existsSync(path.join(__dirname, `./${argvs[0]}.js`))) {
	const command = require(`./${argvs[0]}`);
	argvs = argvs.slice(1);
	command.runner(argvs);
}
else {
	help.help();
	process.exit();
}

module.exports = {
	tips: 'this is a command line tool, please install globally'
};
