import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import {AppRoutingModule} from './app-routing.module';
import { ThreadListComponent } from './chat/thread-list/thread-list.component';
import { CurrentThreadComponent } from './chat/current-thread/current-thread.component';
import { MessageFormComponent } from './chat/message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ThreadListComponent,
    CurrentThreadComponent,
    MessageFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
