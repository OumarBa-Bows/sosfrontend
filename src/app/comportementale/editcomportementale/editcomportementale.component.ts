import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Comportementale } from 'src/app/classesdto/Comportementale';
import { ComportementaleValues } from 'src/app/classesdto/comportementaleValues';
import { ComortementalvaluesService } from 'src/app/services/comortementalvalues.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComportementaleService } from 'src/app/services/comportementale.service';


@Component({
  selector: 'app-editcomportementale',
  templateUrl: './editcomportementale.component.html',
  styleUrls: ['./editcomportementale.component.scss']
})
export class EditcomportementaleComponent implements OnInit {

  public comportementaleForm: FormGroup;
  comportementale: Comportementale = new Comportementale();
  comportementaleValue: ComportementaleValues = new ComportementaleValues();
  comportementaleVs: any;
  message: any;
  yesOrNon: any = [
    { id: 1, name: "Oui" },
    { id: 2, name: "Non" }
  ];

  outils: any = [
    { id: 1, name: "Télévision" },
    { id: 2, name: "Boite à images" },
    { id: 3, name: "Autres" }
  ];

  themes: any = [
    { id: "A", name: "Dépistage VIH" },
    { id: "B", name: "IST" },
    { id: "C", name: "Préservatif" }
  ];


  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private comportementaleValueService: ComortementalvaluesService,
    private comportementaleService: ComportementaleService, public dialogRef: MatDialogRef<EditcomportementaleComponent>,) { }

  ngOnInit(): void {

    this.comportementaleForm = this.fb.group({
      'date_intervention': [this.comportementaleValue.date_comp, Validators.required],
      'entretien_indi': [this.comportementaleValue.entretienindivid],
      'participation_causerie': [this.comportementaleValue.causerie],
      'orientation_depistage_vih': [this.comportementaleValue.orientation],
      'orientation_soinsIst': [this.comportementaleValue.aide_social],
      'Orientation_depistage_hp': [this.comportementaleValue.dep_hp],
      'utilisation_outils': [this.comportementaleValue.outils_iec],
      'outils_utilises': [this.comportementaleValue.outils_util],
      'distribution_ie': [this.comportementaleValue.distribution],
      'themes': [this.comportementaleValue.thems],
      'participation_group_parole': [this.comportementaleValue.participationGP],
      'rapas_communautaire': [this.comportementaleValue.particioationRC],
      'education_therapeutique': [this.comportementaleValue.educationThe],
      'perdue_devue': [this.comportementaleValue.perduedevue],
      'distibutionvideo_reseausociaux': [this.comportementaleValue.distributionvideo],
      'orientation_ptme': [this.comportementaleValue.orientationversPTME],
      'orientation_medecinegenerale': [this.comportementaleValue.orientationVersSoin],
    });

    this.courrentForm();

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

  outilsUtilisesval(s) {
    if (s != null) {
      switch (s) {
        case "Télévision":
          return 1;
        case "Boite à images":
          return 2;
        case "Autres":
          return 3;
      }
    }
    return null;
  }

  themesval(s) {

    if (s != null) {
      switch (s) {
        case "Dépistage VIH":
          return "A";
        case "IST":
          return "B";
        case "Préservatif":
          return "C";

      }
    }

    return null;
  }

  updateComportementale() {
    this.comportementale.comportementale_id = this.data.id;
    this.comportementale.date_comp = parseInt(this.comportementaleForm.get("date_intervention").value);
    this.comportementale.entretien = this.OuiouNonval(this.comportementaleForm.get("entretien_indi").value);
    this.comportementale.causerie = this.OuiouNonval(this.comportementaleForm.get("participation_causerie").value);
    this.comportementale.orientation = this.OuiouNonval(this.comportementaleForm.get("orientation_depistage_vih").value);
    this.comportementale.aide_social = this.OuiouNonval(this.comportementaleForm.get("orientation_soinsIst").value);
    this.comportementale.dep_hp = this.OuiouNonval(this.comportementaleForm.get("Orientation_depistage_hp").value);
    this.comportementale.outils_iec = this.OuiouNonval(this.comportementaleForm.get("utilisation_outils").value);
    this.comportementale.outils_utilise = this.outilsUtilisesval(this.comportementaleForm.get("outils_utilises").value);
    this.comportementale.distrubition_iec = this.OuiouNonval(this.comportementaleForm.get("distribution_ie").value);
    this.comportementale.themes = this.themesval(this.comportementaleForm.get("themes").value);
    this.comportementale.qs40 = this.OuiouNonval(this.comportementaleForm.get("participation_group_parole").value);
    this.comportementale.qs41 = this.OuiouNonval(this.comportementaleForm.get("rapas_communautaire").value);
    this.comportementale.qs42 = this.OuiouNonval(this.comportementaleForm.get("education_therapeutique").value);
    this.comportementale.qs43 = this.OuiouNonval(this.comportementaleForm.get("perdue_devue").value);
    this.comportementale.qs44 = this.OuiouNonval(this.comportementaleForm.get("distibutionvideo_reseausociaux").value);
    this.comportementale.qs45 = this.OuiouNonval(this.comportementaleForm.get("orientation_ptme").value);
    this.comportementale.qs46 = this.OuiouNonval(this.comportementaleForm.get("orientation_medecinegenerale").value);

    this.comportementaleService.updateComportemetale(this.data.id, this.comportementale).subscribe(data => {
      if (data) {
        this.message = data;
      }
    })
    this.onClose()
  }

  onClear() {
    this.dialogRef.close();
  }

  onClose() {
    this.comportementaleForm.reset();
    this.dialogRef.close();
  }


  courrentForm() {
    this.comportementaleValueService.findByidcomportementale(this.data.id).subscribe(valeur => {
      if (valeur) {
        this.comportementaleVs = valeur;
        this.comportementaleForm.get("date_intervention").setValue(this.comportementaleVs.date_comp);
        this.comportementaleForm.get("entretien_indi").setValue(this.comportementaleVs.entretienindivid)
        console.log("++++++===============parseInt" + (this.comportementaleVs.causerie))
        this.comportementaleForm.get("participation_causerie").setValue(this.comportementaleVs.causerie)
        this.comportementaleForm.get("orientation_depistage_vih").setValue(this.comportementaleVs.orientation)
        this.comportementaleForm.get("orientation_soinsIst").setValue(this.comportementaleVs.aide_social)
        this.comportementaleForm.get("Orientation_depistage_hp").setValue(this.comportementaleVs.dep_hp)
        this.comportementaleForm.get("utilisation_outils").setValue(this.comportementaleVs.outils_iec)
        this.comportementaleForm.get("outils_utilises").setValue(this.comportementaleVs.outils_util)
        this.comportementaleForm.get("distribution_ie").setValue(this.comportementaleVs.distribution)
        this.comportementaleForm.get("themes").setValue(this.comportementaleVs.thems);
        this.comportementaleForm.get("participation_group_parole").setValue(this.comportementaleVs.participationGP)
        this.comportementaleForm.get("rapas_communautaire").setValue(this.comportementaleVs.particioationRC)
        this.comportementaleForm.get("education_therapeutique").setValue(this.comportementaleVs.educationThe)
        this.comportementaleForm.get("perdue_devue").setValue(this.comportementaleVs.perduedevue)
        this.comportementaleForm.get("distibutionvideo_reseausociaux").setValue(this.comportementaleVs.distributionvideo)
        this.comportementaleForm.get("orientation_ptme").setValue(this.comportementaleVs.orientationversPTME)
        this.comportementaleForm.get("orientation_medecinegenerale").setValue(this.comportementaleVs.orientationVersSoin)
      }
    })
  }



}
