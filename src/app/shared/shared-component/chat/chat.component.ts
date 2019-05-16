import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../interface/message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  @Input() public oldMessage: Message[] = [] as Message[];

  constructor() { }

  public ngOnInit(): void {
  }

}
