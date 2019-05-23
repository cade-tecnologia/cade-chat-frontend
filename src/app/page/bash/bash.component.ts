import { Component, OnDestroy, OnInit } from '@angular/core';
import { TerminalService } from 'primeng/components/terminal/terminalservice';
import { MessageSocketService } from '../../util/service/socket/message.socket.service';
import { MessagesUtil } from '../../util/messages.util';
import { ACTION_COMMAND } from '../../command/command-list';
import { UserService } from '../../util/service/user.service';
import { BuildMessage, Message } from '../../interface/message.interface';
import { Subscription } from 'rxjs';
import { MessageService } from '../../util/service/message.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './bash.component.html',
})
export class BashComponent implements OnInit, OnDestroy {
  public user: string;
  public isChatEnable: boolean = false;
  public clear: boolean = true;
  public messages: Message[] = [] as Message[];
  private subscription: Subscription[] = [] as Subscription[];

  constructor(
    private messageSocketService: MessageSocketService,
    private messageService: MessageService,
    private userService: UserService,
    private terminalService: TerminalService,
  ) { }

  public ngOnInit(): void {
    this.user = this.userService.user;

    this.subscription.push(
      this.terminalService.commandHandler.subscribe(command => this.onCommand(command)),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.forEach(item => item.unsubscribe());
  }

  public clearBash(): void {
    this.clear = false;
    setTimeout(() => {
      this.clear = true;
    }, 50);
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
      case ('msg'):
        this.subscription.push(
          this.messageSocketService.sendMessage(BuildMessage(args)).subscribe(),
        );
        this.clearBash();
        break;
      case ('chat'):
        this.messageService.getAllMessage().subscribe(res => {
          this.messages = res;
        });
        this.isChatEnable = true;
        break;
      default:
        break;
    }
  }

  private getCommand(input: string): string {
    return input.split(' ')[0]
  }

  private getArgs(input: string): string {
    return input.split(' ').slice(1).join(' ');
  }
}
