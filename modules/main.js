/*
            ______     __                      __  __                     
           /      \   |  \                    |  \|  \                    
 __    __ |  $$$$$$\ _| $$_    __    __   ____| $$ \$$  ______    _______ 
|  \  /  \| $$___\$$|   $$ \  |  \  |  \ /      $$|  \ /      \  /       \
 \$$\/  $$ \$$    \  \$$$$$$  | $$  | $$|  $$$$$$$| $$|  $$$$$$\|  $$$$$$$
  >$$  $$  _\$$$$$$\  | $$ __ | $$  | $$| $$  | $$| $$| $$  | $$ \$$    \ 
 /  $$$$\ |  \__| $$  | $$|  \| $$__/ $$| $$__| $$| $$| $$__/ $$ _\$$$$$$\
|  $$ \$$\ \$$    $$   \$$  $$ \$$    $$ \$$    $$| $$ \$$    $$|       $$
 \$$   \$$  \$$$$$$     \$$$$   \$$$$$$   \$$$$$$$ \$$  \$$$$$$  \$$$$$$$ 
 xLink © 2021 by xstudios.one is licensed under CC BY-ND 4.0 
*/

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
    starter.await('[3/5] Loading comms.js');
  }, 10000);
  setTimeout(() => {
    starter.fatal('[3/5] comms.js not found');
  }, 14000);
  setTimeout(() => {
    comms.time('communication with device');
  }, 15000);
  setTimeout(() => {
    comms.timeEnd('communication with device');
    comms.error(
      'connection could not be established with device on port: /dvc/581r/comms'
    );
  }, 20246);
  setTimeout(() => {
    starter.info('Please note that this is not accually loading anything yet.');
  }, 16000);
}
main();
