import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-sibling1',
    template: `test message from sibling1 component`
    
})

export class Sibling1Component implements OnInit {

    sibling1Msg = "Sibling One Message";


    constructor(){}

    ngOnInit(){}
}