import { NgModule } from '@angular/core';
import { BashComponent } from './bash.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TerminalService } from 'primeng/components/terminal/terminalservice';
import { MessageSocketService } from '../../util/service/socket/message.socket.service';
import {
  TerminalModule,
  ScrollPanelModule,
} from 'primeng/primeng';
import { ChatModule } from '../../shared/shared-component/chat/chat.module';
import { DirectiveModule } from '../../shared/directive/directive.module';

@NgModule({
  imports: [
    CommonModule,
    TerminalModule,
    ScrollPanelModule,
    RouterModule.forChild([{ path: '', component: BashComponent }]),
    ChatModule,
    DirectiveModule,
  ],
  declarations: [
    BashComponent,
  ],
  providers: [
    TerminalService,
    MessageSocketService,
  ],
})
export class BashModule {
}
