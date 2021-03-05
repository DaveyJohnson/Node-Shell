
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd'){
        process.stdout.write(`Current directory: ${process.cwd()}`);
    } else if (cmd === 'exit'){
        process.exit(0); 
    } else {
        process.stdout.write('you typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');    
});