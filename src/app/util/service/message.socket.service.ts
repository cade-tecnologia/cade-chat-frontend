import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message } from '../../interface/message.interface';
import { Observable } from 'rxjs';

@Injectable()
export class MessageSocketService {
  constructor(
    private socket: Socket,
  ) { }

  public sendMessage(msg: Message): void {
    this.socket.emit('receiveMessage', msg);
  }

  public getMessage(): Observable<Message[]> {
    return this.socket.fromEvent<Message[]>('receiveAllMessage')
  }

  public getAllMessage(): Observable<Message[]> {
    this.socket.emit('getAllMessage');
    return this.socket.fromEvent<Message[]>('receiveAllMessage')
  }
}
