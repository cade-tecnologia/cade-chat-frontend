import { Component, OnInit } from '@angular/core';
import { Message } from '../../../interface/message.interface';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  public message: Message[] = [] as Message[];

  constructor(
    private socket: Socket,
  ) { }

  public ngOnInit(): void {
    this.socket.on('sendMessage', (socket: Message) => {
      this.message.push(socket)
      this.notificationMessager(socket);
    });
  }

  private notificationMessager(socket: Message): void {

    const date = new Date();

    socket.user.valueOf() !== window.localStorage.getItem('user') ?
      new Notification(`[${socket.user}-${date.getHours()}:${date.getMinutes()}]-${socket.message}`) : null;
  }

}
