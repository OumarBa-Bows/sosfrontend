import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StructurevaluesService } from 'src/app/services/structurevalues.service';

@Component({
  selector: 'app-details-structure',
  templateUrl: './details-structure.component.html',
  styleUrls: ['./details-structure.component.scss']
})
export class DetailsStructureComponent implements OnInit {
  public strucValues: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DetailsStructureComponent>,
    private strucService: StructurevaluesService) { }

  ngOnInit(): void {
    this.strucService.findByIdStruc(this.data.id).subscribe(val => {
      if (val) {
        this.strucValues = val;
      }
    })
  }

  onClear() {
    this.dialogRef.close();
  }

}
