import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import {AppRoutingModule} from './app-routing.module';
import { ThreadListComponent } from './chat/thread-list/thread-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ThreadListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
