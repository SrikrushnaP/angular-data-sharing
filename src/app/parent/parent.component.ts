import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentMsg = "Message from parent component";

  msgFromChild: string = "";

  @ViewChild(ChildComponent) child: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    Promise.resolve().then(()=>{
      this.msgFromChild = this.child.childMsgInChild;      
    })
  }

}
