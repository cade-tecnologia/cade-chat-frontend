import { Base } from './base.interface';

export interface Message extends Base {
  message: string;
  user: string;
}

export function BuildMessage(msg: string): Message {
  return Object.assign({} as Message, {
    message: msg,
    user: localStorage.getItem('user'),
    createdAt: Date(),
  });
}
