import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Biomedicale } from 'src/app/biomedicale/biomedicale';
import { BiomedicaleValue } from 'src/app/biomedicale/biomedicaleValue';
import { BiomedicaleService } from 'src/app/services/biomedicale.service'
import { BiomedicalevaluesService } from 'src/app/services/biomedicalevalues.service';
@Component({
  selector: 'app-edit-biomedicale',
  templateUrl: './edit-biomedicale.component.html',
  styleUrls: ['./edit-biomedicale.component.scss']
})
export class EditBiomedicaleComponent implements OnInit {

  message: any;
  biomedicaleValue: BiomedicaleValue = new BiomedicaleValue();
  biomedicale: Biomedicale = new Biomedicale();
  biomedicaleVals: any;

  yesOrNon: any = [
    { id: 1, name: "Oui" },
    { id: 2, name: "Non" }
  ];

  resuldepistage: any = [
    { id: 1, name: "Positif" },
    { id: 2, name: "Négatif" }
  ];

  sipositifAction: any = [
    { id: 1, name: "Référencement au CTA" },
    { id: 2, name: "Accompagnement" },
    { id: 3, name: "Référence UPEC Rosso" },
    { id: 4, name: "Référence UPEC Kiffa" },
    { id: 5, name: "Référence UPEC NDB" },
    { id: 6, name: "Référence UPEG Kaedi" },
    { id: 7, name: "Refus" },
    { id: 8, name: "Perdu de vue" }
  ];

  rsultCta: any = [
    { id: 1, name: "Confirmation seropositivité" },
    { id: 2, name: "Négatif" },
    { id: 3, name: "Autre" }
  ]

  resultatTestHep: any = [
    { id: "A", name: "B Positif" },
    { id: "B", name: "C Positif" },
    { id: "C", name: "A Positif" },
    { id: "D", name: "Aucune (Négatif)" }
  ]

  biomedicaleForm: FormGroup;
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private bioservice: BiomedicaleService,
    public dialogRef: MatDialogRef<EditBiomedicaleComponent>, private bioVal: BiomedicalevaluesService) { }

  ngOnInit(): void {
    this.biomedicaleForm = this.fb.group({
      'date_intervention': [this.biomedicaleValue.dateIntervention, Validators.required],
      'depistage_vih': [this.biomedicaleValue.depistageVIH],
      'resultat_depistageVIH': [this.biomedicaleValue.resultat_depistage],
      'action': [this.biomedicaleValue.action],
      'depistage_cta': [this.biomedicaleValue.depistagecta],
      'resultat_cta': [this.biomedicaleValue.resultatcta],
      'mise_sous_arv': [this.biomedicaleValue.mise_arv],
      'date_mise_arv': [this.biomedicaleValue.date_mise_arv],
      'pourquoi': [this.biomedicaleValue.pourquoi],
      'dépistage_ist': [this.biomedicaleValue.depistageIST],
      'dipistage_hbs': [this.biomedicaleValue.depistageHBS],
      'structure_depistage': [this.biomedicaleValue.structure_depitage],
      'resultat_test_hep': [this.biomedicaleValue.resulatat_hp],
      'si_hep_positif': [this.biomedicaleValue.hp_orient],
      'soins_medicale_general': [this.biomedicaleValue.soins_medicale],
      'distribution_preservatif': [this.biomedicaleValue.distributionpresev],
      'preservatif': [this.biomedicaleValue.preservatif],
      'distribution_gel': [this.biomedicaleValue.distributionGel],
      'gel': [this.biomedicaleValue.gels],
      'arv_soins': [this.biomedicaleValue.distribution_arv],
      'arv_prev': [this.biomedicaleValue.distribution_arv_prev],
      'arv_ptme': [this.biomedicaleValue.distribution_arv_ptme],
    })

    this.currentForm()
  }

  questiondirecte(val) {
    if (val != null) {
      switch (val) {
        case "Oui":
          return 1;
        case "Non":
          return 2;
      }
    }
    return null;
  }

  resultat_depistage(val) {
    if (val != null) {
      switch (val) {
        case "Positif":
          return 1;
        case "Négatif":
          return 2;
      }
    }
    return null;
  }

  positif_action(val) {
    if (val != null) {
      switch (val) {
        case "Référencement au CTA":
          return 1;
        case "Accompagnement":
          return 2;
        case "Référence UPEC Rosso":
          return 3;
        case "Référence UPEC Kiffa":
          return 4;
        case "Référence UPEC NDB":
          return 5;
        case "Référence UPEG Kaedi":
          return 6;
        case "Refus":
          return 7;
        case "Perdu de vue":
          return 8
      }
    }
    return null;
  }

  resulatatCTA(val) {
    if (val != null) {
      switch (val) {
        case "Confirmation seropositivité":
          return 1;
        case "Négatif":
          return 2;
        case "Autre":
          return 3;
      }
    }
    return null;
  }

  resultat_Hp(s) {
    if (s != null) {
      switch (s) {
        case "B Positif":
          return "A";
        case "C Positif":
          return "B";
        case "A Positif":
          return "C";
        case "Aucune (Négatif)":
          return "D";
      }
    }
    return null;
  }

  updateBiomedicale() {
    this.biomedicale.biomedicale = this.data.id;
    this.biomedicale.date_bio = parseInt(this.biomedicaleForm.get("date_intervention").value)
    this.biomedicale.test_vih = this.questiondirecte(this.biomedicaleForm.get("depistage_vih").value);
    this.biomedicale.result_despistage = this.resultat_depistage(this.biomedicaleForm.get("resultat_depistageVIH").value)
    this.biomedicale.action = this.positif_action(this.biomedicaleForm.get("action").value)
    this.biomedicale.depistage_cta = this.questiondirecte(this.biomedicaleForm.get("depistage_cta").value)
    this.biomedicale.resultat_cta = this.resulatatCTA(this.biomedicaleForm.get("resultat_cta").value)
    this.biomedicale.mise_arv = this.questiondirecte(this.biomedicaleForm.get("mise_sous_arv").value)
    this.biomedicale.date_arv = parseInt(this.biomedicaleForm.get("date_mise_arv").value)
    this.biomedicale.pourquoi = this.biomedicaleForm.get("pourquoi").value
    this.biomedicale.consultation_ist = this.questiondirecte(this.biomedicaleForm.get("dépistage_ist").value)
    this.biomedicale.dep_hpa = this.questiondirecte(this.biomedicaleForm.get("dipistage_hbs").value)
    this.biomedicale.str_sep_hp = this.biomedicaleForm.get("structure_depistage").value
    this.biomedicale.resul_hp = this.resultat_Hp(this.biomedicaleForm.get("resultat_test_hep").value)
    this.biomedicale.hp_orient = this.questiondirecte(this.biomedicaleForm.get("si_hep_positif").value)
    this.biomedicale.qs50 = this.questiondirecte(this.biomedicaleForm.get("soins_medicale_general").value)
    this.biomedicale.qs51 = this.questiondirecte(this.biomedicaleForm.get("distribution_preservatif").value)
    this.biomedicale.preservatifs = this.biomedicaleForm.get("preservatif").value
    this.biomedicale.qs52 = this.questiondirecte(this.biomedicaleForm.get("distribution_gel").value)
    this.biomedicale.gels = this.biomedicaleForm.get("gel").value
    this.biomedicale.qs53 = this.questiondirecte(this.biomedicaleForm.get("arv_soins").value)
    this.biomedicale.qs54 = this.questiondirecte(this.biomedicaleForm.get("arv_prev").value)
    this.biomedicale.qs55 = this.questiondirecte(this.biomedicaleForm.get("arv_ptme").value)

    this.bioservice.updateBiomedicale(this.data.id, this.biomedicale).subscribe(value => {
      if (value) {
        this.message = value;
        console.log(this.message)
      }
    })
    this.onClose();
  }

  onClear() {
    this.dialogRef.close();
  }

  onClose() {
    this.biomedicaleForm.reset();
    this.dialogRef.close();
  }


  currentForm() {
    this.bioVal.finfByBomedicaleId(this.data.id).subscribe(data => {
      if (data) {
        this.biomedicaleVals = data;
        this.biomedicaleForm.get("date_intervention").setValue(this.biomedicaleVals.dateIntervention)
        this.biomedicaleForm.get("depistage_vih").setValue(this.biomedicaleVals.depistageVIH);
        this.biomedicaleForm.get("resultat_depistageVIH").setValue(this.biomedicaleVals.resultat_depistage)
        this.biomedicaleForm.get("action").setValue(this.biomedicaleVals.action)
        this.biomedicaleForm.get("depistage_cta").setValue(this.biomedicaleVals.depistagecta)
        this.biomedicaleForm.get("resultat_cta").setValue(this.biomedicaleVals.resultatcta)
        this.biomedicaleForm.get("mise_sous_arv").setValue(this.biomedicaleVals.mise_arv);
        this.biomedicaleForm.get("date_mise_arv").setValue(this.biomedicaleVals.date_mise_arv)
        this.biomedicaleForm.get("pourquoi").setValue(this.biomedicaleVals.pourquoi)
        this.biomedicaleForm.get("dépistage_ist").setValue(this.biomedicaleVals.depistageIST)
        this.biomedicaleForm.get("dipistage_hbs").setValue(this.biomedicaleVals.depistageHBS)
        this.biomedicaleForm.get("structure_depistage").setValue(this.biomedicaleVals.structure_depitage)
        this.biomedicaleForm.get("resultat_test_hep").setValue(this.biomedicaleVals.resulatat_hp)
        this.biomedicaleForm.get("si_hep_positif").setValue(this.biomedicaleVals.hp_orient)
        this.biomedicaleForm.get("soins_medicale_general").setValue(this.biomedicaleVals.soins_medicale)
        this.biomedicaleForm.get("distribution_preservatif").setValue(this.biomedicaleVals.distributionpresev)
        this.biomedicaleForm.get("preservatif").setValue(this.biomedicaleVals.preservatif)
        this.biomedicaleForm.get("distribution_gel").setValue(this.biomedicaleVals.distributionGel)
        this.biomedicaleForm.get("gel").setValue(this.biomedicaleVals.gels)
        this.biomedicaleForm.get("arv_soins").setValue(this.biomedicaleVals.distribution_arv)
        this.biomedicaleForm.get("arv_prev").setValue(this.biomedicaleVals.distribution_arv_prev)
        this.biomedicaleForm.get("arv_ptme").setValue(this.biomedicaleVals.distribution_arv_ptme)
      }
    })
  }

}
