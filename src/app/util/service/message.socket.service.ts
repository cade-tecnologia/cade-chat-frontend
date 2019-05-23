import { Injectable } from '@angular/core';
import { Message } from '../../interface/message.interface';
import SocketEventUtil from '../socket-event.util';
import { SocketService } from './socket.service';
import { Observable } from 'rxjs';

@Injectable()
export class MessageSocketService {
  constructor(
    private socketService: SocketService,
  ) { }

  public sendMessage(msg: Message): Observable<any> {
    return this.socketService.emit(SocketEventUtil.RECEIVE, msg);
  }

  public getRecentMessage(): Observable<Message> {
    return this.socketService.on<Message>(SocketEventUtil.RECENT_MESSAGE)
  }
}
