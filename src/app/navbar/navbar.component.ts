import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  tiles:Courses[];
  ngOnInit() {
    this.tiles=[
      {id: 1, name:'Force',course:'physics'},
      {id: 2, name:'Newton First Law of Motion',course:'physics'},
      {id: 3, name:'Newton Second Law of Motion',course:'physics'},
      {id: 4, name:'Application',course:'physics'},
      {id: 5, name:'Newton Third Law of Motion',course:'physics'},
      {id: 6, name:'Spring Force',course:'physics'},
      {id: 7, name:'Psedo Force ',course:'physics'},
      {id: 8, name:'Weighing Machine',course:'physics'}
    ];
  }

  
}
export interface Courses {
  id: number;
  name: string;
  course:string;

}
