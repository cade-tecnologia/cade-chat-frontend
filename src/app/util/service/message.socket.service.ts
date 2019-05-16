import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Message } from '../../interface/message.interface';

@Injectable()
export class MessageSocketService {
  constructor(
    private socket: Socket,
  ) { }

  public sendMessage(msg: Message): void {
    this.socket.emit('receiveMessage', msg);
  }

  public getAllMessage(): Observable<string> {
    return this.socket.fromEvent('sendAllMessage')
  }
}
