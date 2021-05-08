import { Component, OnInit, Inject } from '@angular/core';
import { Comportementale } from 'src/app/classesdto/Comportementale';
import { ComportementaleValues } from 'src/app/classesdto/comportementaleValues';
import { ComortementalvaluesService } from 'src/app/services/comortementalvalues.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComportementaleService } from 'src/app/services/comportementale.service';

@Component({
  selector: 'app-details-comportementale',
  templateUrl: './details-comportementale.component.html',
  styleUrls: ['./details-comportementale.component.scss']
})
export class DetailsComportementaleComponent implements OnInit {
  message: any;
  comportementaleVs: any


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private comportementaleValueService: ComortementalvaluesService,
    private comportementaleService: ComportementaleService, public dialogRef: MatDialogRef<DetailsComportementaleComponent>) { }

  ngOnInit(): void {
    this.comportementaleValueService.findByidcomportementale(this.data.id).subscribe(valeur => {
      if (valeur) {
        this.comportementaleVs = valeur;
        console.log("+++++++++++" + this.comportementaleVs);
      }
    });
  }

  onClear() {
    this.dialogRef.close();
  }
}
