import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LevelserviceService} from 'src/app/services/levelservice.service';
import {Level} from 'src/app/level/level';

@Component({
  selector: 'app-detailcases',
  templateUrl: './detailcases.component.html',
  styleUrls: ['./detailcases.component.scss']
})
export class DetailcasesComponent implements OnInit {
  levelId: any;
  public level: Level = new Level();
  public indetification: any;
  public comportementalValues: any;

  constructor(private route: ActivatedRoute, private levelservice: LevelserviceService) { }

  ngOnInit(): void {
    this.levelId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.levelId); 

    this.levelservice.findByid(this.levelId).subscribe(data=>{
      if(data){
        this.level = data;
       
      }
    })

    this.levelservice.getIdentification(this.levelId).subscribe(data=>{
      if(data){
        this.indetification = data;
        
      }
    })

    this.levelservice.listcomportementalevalue(this.levelId).subscribe(value =>{
      if(value){
        this.comportementalValues = value;
        console.log(this.comportementalValues);
      }
    })
  }

}
