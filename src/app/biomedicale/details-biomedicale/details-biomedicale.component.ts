import { Component, OnInit, Inject } from '@angular/core';
import { BiomedicalevaluesService } from 'src/app/services/biomedicalevalues.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details-biomedicale',
  templateUrl: './details-biomedicale.component.html',
  styleUrls: ['./details-biomedicale.component.scss']
})
export class DetailsBiomedicaleComponent implements OnInit {

  biomedicaleValue: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private bioValueService: BiomedicalevaluesService
    , public dialogRef: MatDialogRef<DetailsBiomedicaleComponent>) { }

  ngOnInit(): void {
    this.bioValueService.finfByBomedicaleId(this.data.id).subscribe(val => {
      if (val) {
        this.biomedicaleValue = val;
      }
    })
  }

  onClear() {
    this.dialogRef.close();
  }

}
