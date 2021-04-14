import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit{

    @Input() childMsg: string = '';

    childMsgInChild = 'Message in child component';

    childMsgInChild2 = 'Message in child component';


    @Output() messageEvent = new EventEmitter();

    constructor(){}

    ngOnInit(){}

    sendMessage() {
        this.messageEvent.emit(this.childMsgInChild2)
      }
}