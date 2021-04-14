import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "src/app/data.service";

@Component({
    selector: 'app-sibling2',
    template: `This is Sibling2 component  <i><strong> '{{sibling2Msg}}</strong> (message from sibling1 component)'</i>
    <br> <br> <br>
    {{message}} <br>
    <button (click)="newMessage()">New Message</button>
    `
})

export class Sibling2Component implements OnInit {
    @Input() sibling2Msg: string = '';
    message:string = "";
  subscription?: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling2 (Globally changed)")
  }
}