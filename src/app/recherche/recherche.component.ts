import { Component, OnInit } from '@angular/core';
import {LevelserviceService} from 'src/app/services/levelservice.service';
import {Alllevels} from './allLevels';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  model: any= {};
  levels: Alllevels[] = [];
  comportementals: any;
  cases = [];
  p: number = 1;
  /////////////////////////////////////

  structures = [
     { id:"0", name: " "},
     { id : "1", name: "SOS PE"},
     {id: "2", name: "AGD"},
     {id: "3", name: "REMAPLUS"},
     {id: "4", name: "NAD NDB"},        
     {id: "5", name: "AFLM NDB"},
     {id: "6", name: "NSA"},                   
     {id: "7", name: "INTERFACE ACTION"}, 
     {id: "8", name: "STOP SIDA"},   
     {id: "9", name: "PE NDB"},                  
     {id: "10", name: "OMST SIDA ROSSO"},    
     {id: "11", name: "RRAJ NOUAKCHOTT"},
     {id: "12", name: "FOR/MVD"},   
     {id: "13", name: "ASC NDB"}                   
  ]
  
  constructor(private levelservice: LevelserviceService, private route: Router) { }

  ngOnInit(): void {

    this.levelservice.levleslines().subscribe(resultat=>{
      if(resultat){
        this.levels = resultat;
        this.cases = resultat;
        console.log(this.levels);
      }
    })

    
  }

 
  //recherche par structure
  search(str){
    if(str.target.value===" "){
      this.cases=this.levels;
    }
    else
    {
      this.cases = (str.target.value) ? this.levels.filter(level => level.structurelle.includes(str.target.value)) : null;
    }  
  }

  gotoDetails(id){
    this.route.navigate(["details/", id]);
  }

  rechercheParDates(){
    this.levelservice.rechercheParDates(this.model.startdate,this.model.enddate).subscribe(value=>{
      if(value){
        this.cases = value;
      }
    })
  }
}
