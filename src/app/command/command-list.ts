import { Command } from '../interface/command.interfac';

export const ACTION_COMMAND: Command = {
  user: (args: string): string => {
    console.log('1: ', args);
    return ''
  },
  msg: (args: string): void => {
    console.log('MSG TO SEND: ', args);
  },
};
