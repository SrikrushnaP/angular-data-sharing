import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent implements OnInit {

  age: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.age = Number(localStorage.getItem("age"));
    if(this.age != 0){
      alert("The existing value of age is "+ this.age +" and you can access in the entire application, if you want to update the value then enter the value and click the button")
    }
  }

  storeInLocalStorage(age: string){
    localStorage.setItem("age", age);
    this.router.navigate(['/'])
  }

}
