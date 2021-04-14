import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "src/app/data.service";

@Component({
    selector: 'app-sibling1',
    template: `test message from sibling1 component: {{messageForDataService}}`
    
})

export class Sibling1Component implements OnInit {

    sibling1Msg = "Sibling One Message";

    messageForDataService:string = "";
    subscription?: Subscription;


    constructor(private data: DataService){}

    ngOnInit() {
        this.subscription = this.data.currentMessage.subscribe(message => this.messageForDataService = message)
      }
      
      ngOnDestroy() {
        this.subscription?.unsubscribe();
      }
}