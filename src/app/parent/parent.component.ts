import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentMsg = "Message from parent component";

  msgFromChild: string = "";

  @ViewChild(ChildComponent) child: any;

  @ViewChild(Sibling1Component) sibling1: any;
  sibling1Msg:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    Promise.resolve().then(()=>{
      this.msgFromChild = this.child.childMsgInChild;   
    })

    Promise.resolve().then(()=>{
      this.sibling1Msg = this.sibling1.sibling1Msg;
    })
  }

  msgFromChild2: string = "";

  receiveMessage($event: any) {
    this.msgFromChild2 = $event
  }

}
