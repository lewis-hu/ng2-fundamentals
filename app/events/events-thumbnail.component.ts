import {Component, Input} from '@angular/core'
import { IEvent } from '.';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name | uppercase }}</h2>
        <div>Date: {{event?.date | date:'dd-MMM-yyyy'}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: {{event?.price | currency:'GBP':true }}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>
   `,
   styles: [`
    .green { color: #00ff00 !important; }
    .bold { font-weight: bold; }
    .thumbnail { min-height:230px; }
    .pad-left { margin-left:10px; }
    .well div { color:#ffaacc; }
   `
]
})
export class EventThumbnailComponent{
    @Input() event: IEvent

    getStartTimeClass(){
        // const isEarly = this.event && this.event.time==='8:00 am'
        // return {green: isEarly, bold: isEarly}
        const isEarly = this.event && this.event.time==='8:00 am'
        if(isEarly){
            return ['green','bold']
        }
        return [];
    }
    getStartTimeStyle(){
        const isEarly = this.event && this.event.time==='8:00 am'
        if(isEarly){
            return {color:'#00ff00', 'font-weight':'bold'}
        }
        return {};
    }
}