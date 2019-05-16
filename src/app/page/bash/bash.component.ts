import { Component, OnInit } from '@angular/core';
import { TerminalService } from 'primeng/components/terminal/terminalservice';
import { MessageSocketService } from '../../util/service/message.socket.service';
import { MessagesUtil } from '../../util/messages.util';
import { ACTION_COMMAND } from '../../command/command-list';
import { UserService } from '../../util/service/user.service';
import { BuildMessage, Message } from '../../interface/message.interface';

@Component({
  selector: 'app-terminal',
  templateUrl: './bash.component.html',
})
export class BashComponent implements OnInit {
  public user: string;
  public isChatEnable: boolean = false;
  public oldMsg: Message[] = [] as Message[];

  constructor(
    private terminalService: TerminalService,
    private socketService: MessageSocketService,
    private userService: UserService,
  ) { }

  public ngOnInit(): void {
    this.user = this.userService.user;

    this.terminalService.commandHandler.subscribe(command => this.onCommand(command));
  }

  private onCommand(input: string): void {
    if (!this.isCommandoValid(this.getCommand(input))) return;
    this.applyCommand(input);
  }

  private isCommandoValid(input: string): boolean {
    const command = this.getCommand(input);

    if (!ACTION_COMMAND.hasOwnProperty(command)) {
      this.terminalService.sendResponse(MessagesUtil.COMMAND_NOT_FOUND(command));
      return false;
    }

    return true;
  }

  private applyCommand(input: string): void {
    const command = this.getCommand(input);
    const args = this.getArgs(input);

    if (command === 'user') {
      this.userService.user = args;
      this.user = this.userService.user;
      return;
    }

    if (!this.user) {
      this.terminalService.sendResponse(MessagesUtil.USER_NOT_FOUND);
      return;
    }

    this.executeCommand(command, args);
  }

  private executeCommand(command: string, args: string): void {
    switch (command) {
      case('msg'):
        this.socketService.sendMessage(BuildMessage(args));
        break;
      case('chat'):
        this.socketService.getAllMessage().subscribe(res => this.oldMsg = res);
        this.isChatEnable = true;
        break;
      default:
        break;
    }
  }
  private getCommand(input: string): string {
    return input.split( ' ')[0]
  }

  private getArgs(input: string): string {
    return input.split(' ').slice(1).join(' ');
  }
}
