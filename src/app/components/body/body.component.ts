import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  title = 'Tour of Heroes';
  images:any=[]
  constructor(){
    for(let i = 1 ; i < 21; i++){
    this.images.push('./assets/'+i+'.png');
    console.log(this.images)
    }
  }
}
