import {Component, OnInit} from '@angular/core'
import { componentFactoryName } from '@angular/compiler';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '.';

@Component({
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
export class EventsListComponent implements OnInit{
    events: IEvent[];
    constructor(private eventService: EventService, private route: ActivatedRoute){
        
    }
 
    ngOnInit(){
        this.events = this.route.snapshot.data['events'];
    }
}