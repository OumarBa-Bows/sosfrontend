import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LevelserviceService } from 'src/app/services/levelservice.service';
import { ComortementalvaluesService } from 'src/app/services/comortementalvalues.service';
import { BiomedicalevaluesService } from 'src/app/services/biomedicalevalues.service';
import { StructurevaluesService } from 'src/app/services/structurevalues.service';
import { Level } from 'src/app/level/level';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Comportementale } from 'src/app/classesdto/Comportementale';
import { ComportementaleValues } from 'src/app/classesdto/comportementaleValues';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EditcomportementaleComponent } from 'src/app/comportementale/editcomportementale/editcomportementale.component'
import { DetailsComportementaleComponent } from 'src/app/comportementale/details-comportementale/details-comportementale.component';
import { EditBiomedicaleComponent } from 'src/app/biomedicale/edit-biomedicale/edit-biomedicale.component';
import { EditStructureComponent } from 'src/app/structure/edit-structure/edit-structure.component';
import { DetailsBiomedicaleComponent } from 'src/app/biomedicale/details-biomedicale/details-biomedicale.component';
import { DetailsStructureComponent } from 'src/app/structure/details-structure/details-structure.component';

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
  public structurellevalues: any;


  constructor(private route: ActivatedRoute, private levelservice: LevelserviceService,
    private comportementaleValuesservice: ComortementalvaluesService, private fb: FormBuilder, public dialog: MatDialog,
    private biomedicalevalueservice: BiomedicalevaluesService, private structurellevalueservice: StructurevaluesService) { }

  ngOnInit(): void {


    this.levelId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.levelId);
    //..........................................................................................
    this.levelservice.findByid(this.levelId).subscribe(data => {
      if (data) {
        this.level = data;

      }
    })

    //..........................................................................................
    //........................ les valeurs de l'identification personnelle
    this.levelservice.getIdentification(this.levelId).subscribe(data => {
      if (data) {
        this.indetification = data;

      }
    })
    //..........................................................................................
    // return la liste des comportementales values 
    this.comportementaleValuesservice.listcomportementalevalue(this.levelId).subscribe(value => {
      if (value) {
        this.comportementalValues = value;

      }
    })
    //..........................................................................................
    // return la lsite des biomedicales values
    this.biomedicalevalueservice.listBiomedicaleVlues(this.levelId).subscribe(result => {
      if (result) {
        this.biomedicalevalues = result;

      }
    })
    //......................................................................
    // return la liste des structurevalues  
    this.structurellevalueservice.ListStructurelleValue(this.levelId).subscribe(result => {
      if (result) {
        this.structurellevalues = result;
        console.log(".......*****....." + this.structurellevalues);
      }
    })


  }

  editComportementale(idcomortementale) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.height = "90%";
    dialogConfig.data = { id: idcomortementale };
    this.dialog.open(EditcomportementaleComponent, dialogConfig)
  }

  editBiomedicale(idbiomedicale) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.height = "90%";
    dialogConfig.data = { id: idbiomedicale };
    this.dialog.open(EditBiomedicaleComponent, dialogConfig)
  }

  editStructure(idStructure) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { id: idStructure };
    this.dialog.open(EditStructureComponent, dialogConfig)
  }

  detailsComportementale(comportementale_id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    //dialogConfig.height = "90%";
    dialogConfig.data = { id: comportementale_id };
    this.dialog.open(DetailsComportementaleComponent, dialogConfig)
  }

  detailsBiomedicale(biomedicale_id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    //dialogConfig.height = "90%";
    dialogConfig.data = { id: biomedicale_id };
    this.dialog.open(DetailsBiomedicaleComponent, dialogConfig)
  }

  detailsStructure(structureId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    //dialogConfig.height = "90%";
    dialogConfig.data = { id: structureId };
    this.dialog.open(DetailsStructureComponent, dialogConfig)
  }

}
