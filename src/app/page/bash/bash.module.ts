import { NgModule } from '@angular/core';
import { BashComponent } from './bash.component';
import { TerminalModule } from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TerminalService } from 'primeng/components/terminal/terminalservice';
import { SocketIoModule } from 'ngx-socket-io';
import { socketConfig } from '../../config/socket.config';
import { SocketService } from '../../util/service/socket.service';

@NgModule({
  imports: [
    CommonModule,
    TerminalModule,
    SocketIoModule.forRoot(socketConfig),
    RouterModule.forChild([{ path: '', component: BashComponent }]),
  ],
  declarations: [
    BashComponent,
  ],
  providers: [
    TerminalService,
    SocketService,
  ],
})
export class BashModule { }
