import { Component, OnInit } from '@angular/core';
import { Message } from '../../../interface/message.interface';
import { MessageSocketService } from '../../../util/service/message.socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  public message: Message[] = [] as Message[];

  constructor(
    private socketService: MessageSocketService,
  ) { }

  public ngOnInit(): void {
    this.socketService.getAllMessage().subscribe(res => this.message = res);
  }

}
