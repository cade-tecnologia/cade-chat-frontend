import { Command } from '../interface/command.interfac';

export const ACTION_COMMAND: Command = {
  user: (args: string): string => {
    localStorage.setItem('user', args + ' $');
    return args + ' $';
  },
  msg: (args: string): void => {
    console.log('MSG TO SEND: ', args);
  },
};
