import * as shell from 'shelljs';

// Copy all the view templates and static assets
shell.cp('-R', 'src/views', 'dist/');
shell.mkdir('-p', 'dist/public');
shell.cp('-R', 'src/public/*', 'dist/public');
