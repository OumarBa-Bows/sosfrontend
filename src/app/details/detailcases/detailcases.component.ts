import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LevelserviceService} from 'src/app/services/levelservice.service';
import {ComortementalvaluesService} from 'src/app/services/comortementalvalues.service';
import {BiomedicalevaluesService} from 'src/app/services/biomedicalevalues.service';
import {StructurevaluesService} from 'src/app/services/structurevalues.service';
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
  public biomedicalevalues: any;
  public structurellevalues:any;

  constructor(private route: ActivatedRoute, private levelservice: LevelserviceService,
    private comportementaleValuesservice: ComortementalvaluesService,
     private biomedicalevalueservice: BiomedicalevaluesService, private structurellevalueservice: StructurevaluesService) { }

  ngOnInit(): void {
    this.levelId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.levelId); 
    //..........................................................................................
    this.levelservice.findByid(this.levelId).subscribe(data=>{
      if(data){
        this.level = data;
       
      }
    })

    //..........................................................................................
    //........................ les valeurs de l'identification personnelle
    this.levelservice.getIdentification(this.levelId).subscribe(data=>{
      if(data){
        this.indetification = data;
        
      }
    })
    //..........................................................................................
    // return la liste des comportementales values 
    this.comportementaleValuesservice.listcomportementalevalue(this.levelId).subscribe(value =>{
      if(value){
        this.comportementalValues = value;
        
      }
    })
    //..........................................................................................
    // return la lsite des biomedicales values
    this.biomedicalevalueservice.listBiomedicaleVlues(this.levelId).subscribe(result=>{
      if(result){
        this.biomedicalevalues = result;
       
      }
    })
    //......................................................................
     // return la liste des structurevalues  
     this.structurellevalueservice.ListStructurelleValue(this.levelId).subscribe(result=>{
      if(result){
        this.structurellevalues = result;
        console.log(".......*****....."+this.structurellevalues);
      }
    })

    
  }

  
}
