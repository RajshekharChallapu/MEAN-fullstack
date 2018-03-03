import { Routes }  from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { RouterModule } from "@angular/router";

const APP_ROUTES: Routes= [
    {path:'', redirectTo: '/messages', pathMatch: 'full'},
    {path:'messages',component:MessagesComponent },
    {path: 'auth',component: AuthenticationComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);