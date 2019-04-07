import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
 id: any; name: any;
 tiles: Courses[] = [
  {id: 1, name: 'Force', course: 'physics'},
      {id: 2, name: 'Newton First Law of Motion', course: 'physics'},
      {id: 3, name: 'Newton Second Law of Motion', course: 'physics'},
      {id: 4, name: 'Application', course: 'physics'},
      {id: 5, name: 'Newton Third Law of Motion', course: 'physics'},
      {id: 6, name: 'Spring Force', course: 'physics'},
      {id: 7, name: 'Psedo Force ', course: 'physics'},
      {id: 8, name: 'Weighing Machine', course: 'physics'}
];

  ngOnInit() {
    // this.id=this.route.snapshot.paramMap.get("id");
     this.route.paramMap.subscribe((params: ParamMap)=>{
    this.id = parseInt(params.get('id'));
    this.name=this.tiles.find(x=>x.id==this.id).name;
    
    

     });
  }

}
export interface Courses {
  id: number;
  name: string;
  course:string;

}
