import { Component, OnInit } from '@angular/core';
import { Message } from '../../../interface/message.interface';
import { MessageSocketService } from '../../../util/service/socket/message.socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  public message: Message[] = [] as Message[];

  constructor(
    private messageService: MessageSocketService,
  ) { }

  public ngOnInit(): void {
    this.messageService.getRecentMessage().subscribe(res => {
      this.message.push(res);
      this.notificationMessager(res)
    });
  }

  private notificationMessager(socket: Message): void {
    const date = new Date();

    // tslint:disable-next-line:no-unused-expression
    socket.user.valueOf() !== window.localStorage.getItem('user') ?
      new Notification(`[${socket.user}-${date.getHours()}:${date.getMinutes()}]-${socket.message}`) : null;
  }

}
