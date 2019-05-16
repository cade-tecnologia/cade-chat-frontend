import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable()
export class SocketService {
  constructor(
    private socket: Socket,
  ) { }

  public sendMessage(msg: string): void {
    this.socket.emit('receiveMessage', msg);
  }

  public getMessage(): Observable<string> {
    return this.socket.fromEvent('sendAllMessage')
  }
}
