import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-page1',
    templateUrl: './page1.component.html'
})

export class Page1Component implements OnInit {
    constructor(private router: Router){}

    ngOnInit(){}

    onSearch(name: string) {
        this.router.navigate(['/page2', name])
     }
}