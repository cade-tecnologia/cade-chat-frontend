import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TerminalModule} from 'primeng/terminal';
import {TerminalService} from 'primeng/components/terminal/terminalservice';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    TerminalModule
  ],
  providers: [
    TerminalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
