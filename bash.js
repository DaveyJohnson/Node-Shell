const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const _cmd = data.toString().trim().split(' ');
	const cmd = _cmd[0];
	const arg = _cmd[1];
	
    if (cmd === 'pwd'){
        pwd();
    } else if (cmd === 'exit') {
	    process.exit(0);
	} else if (cmd === 'cat') {
		if(arg)
	      cat(arg);
    } else if (cmd === 'ls') {
        ls();
    } else {
        process.stdout.write('you typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');    
});
