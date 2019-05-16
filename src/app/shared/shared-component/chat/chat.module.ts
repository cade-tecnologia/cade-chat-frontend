import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { ScrollPanelModule } from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { BashComponent } from '../../../page/bash/bash.component';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  ChatComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ScrollPanelModule,
    RouterModule.forChild([{ path: '', component: BashComponent }]),
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class ChatModule { }
