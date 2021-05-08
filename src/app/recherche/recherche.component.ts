import { Component, OnInit } from '@angular/core';
import { LevelserviceService } from 'src/app/services/levelservice.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EditIdentificationComponent } from 'src/app/identification/edit-identification/edit-identification.component'

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  model: any = {};
  levels: any;
  comportementals: any;
  cases = [];
  p: number = 1;
  /////////////////////////////////////

  structures = [
    { id: "0", name: " " },
    { id: "1", name: "SOS PE" },
    { id: "2", name: "AGD" },
    { id: "3", name: "REMAPLUS" },
    { id: "4", name: "NAD NDB" },
    { id: "5", name: "AFLM NDB" },
    { id: "6", name: "NSA" },
    { id: "7", name: "INTERFACE ACTION" },
    { id: "8", name: "STOP SIDA" },
    { id: "9", name: "PE NDB" },
    { id: "10", name: "OMST SIDA ROSSO" },
    { id: "11", name: "RRAJ NOUAKCHOTT" },
    { id: "12", name: "FOR/MVD" },
    { id: "13", name: "ASC NDB" }
  ]

  constructor(private levelservice: LevelserviceService, private route: Router, public dialog: MatDialog,) { }

  ngOnInit(): void {

    this.levelservice.levleslines().subscribe(resultat => {
      if (resultat) {
        this.levels = resultat;
        this.cases = resultat;
        console.log(this.levels);
      }
    })


  }


  //recherche par structure
  search(str) {
    if (str.target.value === " ") {
      this.cases = this.levels;
    }
    else {
      this.cases = (str.target.value) ? this.levels.filter(level => level.structurelle.includes(str.target.value)) : null;
    }
  }

  gotoDetails(id) {
    this.route.navigate(["details/", id]);
  }

  rechercheParDates() {
    this.levelservice.rechercheParDates(this.model.startdate, this.model.enddate).subscribe(value => {
      if (value) {
        this.cases = value;
      }
    })
  }

  editStructure(idLevel, idLocalisation, idInf_intervention) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.height = "90%";
    dialogConfig.data = { id1: idLevel, id2: idLocalisation, id3: idInf_intervention };
    this.dialog.open(EditIdentificationComponent, dialogConfig)
  }
}
