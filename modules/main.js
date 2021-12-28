const signale = require('signale');
const { Signale } = require('signale');
const loader = signale.scope('loader');
const linker = signale.scope('linker');
const comms = signale.scope('communicator');
require('./logodisplay');
function main() {
  const starter = new Signale({ interactive: true, scope: 'loader' });
  starter.await('[1/5] Loading main.js');
  setTimeout(() => {
    starter.success('[1/5] Loading succcess!');
  }, 2000);
  setTimeout(() => {
    starter.await('[2/5] Loading linker.js');
  }, 4000);
  setTimeout(() => {
    starter.fatal('[2/5] linker.js not found');
  }, 8000);
  setTimeout(() => {
    starter.info('Please note that this is not accually loading anything yet.');
  }, 10000);
}
main();
