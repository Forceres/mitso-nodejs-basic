import { join } from 'path';
import { fileURLToPath, URL } from 'url';
import { fork } from 'child_process';
import { stdin } from 'process';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const spawnChildProcess = async (args) => {
  fork(join(__dirname, 'files', 'script.js'), args, {
    stdio: [0, 1, 2, 'ipc'],
  });
};
// Put your arguments in function call to test this functionality
spawnChildProcess(['Maksim', 'Aleksandrovich', 'Kalinin']);
