import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-page2',
    template: `This is page2: {{name}} (Data from previous component)`
})

export class Page2Component implements OnInit{
    name: string;
    constructor(private route: ActivatedRoute){
        this.name = this.route.snapshot.params.name;
    }

    ngOnInit(){}
}