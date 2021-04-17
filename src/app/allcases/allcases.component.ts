import { Component, OnInit } from '@angular/core';
import {LevelserviceService} from 'src/app/services/levelservice.service';


@Component({
  selector: 'app-allcases',
  templateUrl: './allcases.component.html',
  styleUrls: ['./allcases.component.scss']
})
export class AllcasesComponent implements OnInit {
  
  levels: any;
  comportementals: any;

  constructor(private levelservice: LevelserviceService) { }

  ngOnInit(): void {

    this.levelservice.levleslines().subscribe(resultat=>{
      if(resultat){
        this.levels = resultat;
        console.log("this.levels "+this.levels);
      }
    })
  }

}
