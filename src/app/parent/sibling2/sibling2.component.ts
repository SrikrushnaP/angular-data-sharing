import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-sibling2',
    template: `This is Sibling2 component  <i><strong> '{{sibling2Msg}}</strong> (message from sibling1 component)'</i>`
})

export class Sibling2Component implements OnInit {
    @Input() sibling2Msg: string = '';
    constructor(){}

    ngOnInit(){}
}