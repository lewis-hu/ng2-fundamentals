import { Routes } from "@angular/router"

import { CreateEventComponent } from "./events/create-event-component";
import { Error404Component } from "./errors/404.components";
import { 
    EventsListComponent, 
    EventListResolver, 
    EventRouteActivator, 
    EventDetailsComponent 
} from "./events/index";

export const appRoutes : Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent , canActivate:[EventRouteActivator]},
    { path: '404', component: Error404Component },
    { path: '', redirectTo:'/events', pathMatch: 'full'},
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]