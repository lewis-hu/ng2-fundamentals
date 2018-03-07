import {Component} from '@angular/core'
import { componentFactoryName } from '@angular/compiler';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let evt of events" class="col-md-5">
                <event-thumbnail [event]="evt"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent{
}