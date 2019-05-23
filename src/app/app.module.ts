import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './util/service/user.service';
import { SocketIoModule } from 'ngx-socket-io';
import { socketConfig } from './config/socket.config';
import { SocketService } from './util/service/socket/socket.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(socketConfig),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [UserService, SocketService],
  bootstrap: [AppComponent],
})
export class AppModule { }
