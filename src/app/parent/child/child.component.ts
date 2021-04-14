import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit{

    @Input() childMsg: string = '';

    childMsgInChild = 'Message in child component';

    constructor(){}

    ngOnInit(){}
}