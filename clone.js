var spawn = require('child_process').spawnSync;
var del = require('del');

del.sync(['src', 'docs']);

spawn(
	'git',
	[
		'clone', '.', './src',
		'--branch', 'master',
		'--local',
		'--no-hardlinks',
		'--single-branch'
	],
	{ stdio: ['ignore', process.stdout, process.stderr] }
);
