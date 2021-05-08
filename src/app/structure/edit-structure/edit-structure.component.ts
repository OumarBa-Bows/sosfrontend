import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Structure } from '../structure';
import { structureValue } from '../structureValue';
import { StructureService } from 'src/app/services/structure.service';
import { StructurevaluesService } from 'src/app/services/structurevalues.service'

@Component({
  selector: 'app-edit-structure',
  templateUrl: './edit-structure.component.html',
  styleUrls: ['./edit-structure.component.scss']
})
export class EditStructureComponent implements OnInit {
  structure: Structure = new Structure();
  StructureValue: structureValue = new structureValue();
  valuesStruc: any;
  message: any;
  yesOrNon: any = [
    { id: 1, name: "Oui" },
    { id: 2, name: "Non" }
  ];

  structureForm: FormGroup;
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditStructureComponent>
    , private structureService: StructureService, private structureValService: StructurevaluesService) { }

  ngOnInit(): void {
    this.structureForm = this.fb.group({
      'date_intervention': [this.StructureValue.date_intervention, Validators.required],
      'appui_soccio': [this.StructureValue.appui_economique],
      'appui_juridique': [this.StructureValue.appui_jurique],
      'Orientation': [this.StructureValue.orientation],
      'formation_specifique': [this.StructureValue.formation_specique]
    })
    this.currentForm()
  }

  OuiouNonval(s) {
    if (s != null) {
      switch (s) {
        case "Oui":
          return 1;
        case "Non":
          return 2;
      }
    }
    return null;
  }

  updateStructure() {
    this.structure.structurelle_id = this.data.id;
    this.structure.date_struc = parseInt(this.structureForm.get("date_intervention").value)
    this.structure.appui_economique = this.OuiouNonval(this.structureForm.get("appui_soccio").value)
    this.structure.appui_juridique = this.OuiouNonval(this.structureForm.get("appui_juridique").value)
    this.structure.qs100 = this.OuiouNonval(this.structureForm.get("Orientation").value)
    this.structure.qs101 = this.OuiouNonval(this.structureForm.get("formation_specifique").value)

    this.structureService.updateStructure(this.data.id, this.structure).subscribe(data => {
      if (data) {
        this.message = data;
        console.log(".................;" + this.message)
      }
    })
    this.onClose()
  }

  onClear() {
    this.dialogRef.close();
  }

  onClose() {
    this.structureForm.reset();
    this.dialogRef.close();
  }


  currentForm() {
    this.structureValService.findByIdStruc(this.data.id).subscribe(val => {
      if (val) {
        this.valuesStruc = val;
        this.structureForm.get("date_intervention").setValue(this.valuesStruc.date_intervention)
        this.structureForm.get("appui_soccio").setValue(this.valuesStruc.appui_economique)
        this.structureForm.get("appui_juridique").setValue(this.valuesStruc.appui_jurique)
        this.structureForm.get("Orientation").setValue(this.valuesStruc.orientation)
        this.structureForm.get("formation_specifique").setValue(this.valuesStruc.formation_specique)
      }
    })
  }

}
