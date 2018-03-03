import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';

@NgModule({
/* the view classes that belong to this module.Angular has three kinds of view classes : components,
directives,
and pipes. */
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent
    ],
/* other modules whose exported classes are needed by component templates declared in this module. */
    imports: [BrowserModule, FormsModule],
    /* bootstrap(main application view) is root component..only root module set this bootstrap property */
    bootstrap: [AppComponent]
})

export class AppModule {

}