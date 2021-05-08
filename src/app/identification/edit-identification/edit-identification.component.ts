import { Component, OnInit, Inject } from '@angular/core';
import { ElementsList } from 'src/app/classesdto/ElementList';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InfInterventionService } from 'src/app/services/inf-intervention.service';
import { LocalisationService } from 'src/app/services/localisation.service';
import { Level1Service } from 'src/app/services/level1.service';
import { LevelserviceService } from 'src/app/services/levelservice.service';
import { Inf_intervention } from 'src/app/inf_intervention/Inf_intervention';
import { Localisation } from 'src/app/localisation/localisation';
import { Level } from 'src/app/level/level';
import { All_levels } from 'src/app/classesdto/Alllevels';

@Component({
  selector: 'app-edit-identification',
  templateUrl: './edit-identification.component.html',
  styleUrls: ['./edit-identification.component.scss']
})
export class EditIdentificationComponent implements OnInit {
  yesOrNon: any = [
    { id: 1, name: "Oui" },
    { id: 2, name: "Non" }
  ];
  indentificationForm: FormGroup
  elements: ElementsList = new ElementsList();
  localisation: Localisation = new Localisation()
  localisation2: Localisation = new Localisation()
  inf_intervention: Inf_intervention = new Inf_intervention()
  level1: Level = new Level()
  message1: any;
  message2: any;
  message3: any;
  alllevels: any;
  levels: All_levels = new All_levels();

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditIdentificationComponent>,
    private infinterventionService: InfInterventionService, private localisationService: LocalisationService,
    private levelservice: LevelserviceService) { }

  ngOnInit(): void {
    this.indentificationForm = this.fb.group({
      'Prenom': [this.levels.prenom],
      'prenom_mere': [this.levels.prenom_mere],
      'prenom_pere': [this.levels.prenom_pere],
      'annee_naissance': [this.levels.anneeNaissance],
      'categorie': [this.levels.categorie],
      'willayaa': [this.levels.wilaya],
      'moughata': [this.levels.moughata],
      'commune': [this.levels.commune],
      'sexe': [this.levels.sexe],
      'date_identification': [this.levels.date_indentification],
      'nationnalte': [this.levels.nationalite],
      'autre_nationnalite': [this.levels.autre_nationnalite],
      'nom_site': [this.levels.site],
      'autre_site': [this.levels.autre_site],
      'telephone': [this.levels.telephone],
      'age': [this.levels.age],
      'situation_matrim': [this.levels.situation_matrim],
      'niveau_scolaire': [this.levels.niveauSocial],
      'nom_structure': [this.levels.structurelle],
      'date_saisie': [this.levels.dateInterview],
      'date_dernienre_modif': [this.levels.date_modif],
      'type_cas': [this.levels.typecas],
    })
    this.currentForm();
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



  getStructurenum(struc) {
    let structureName = 0;
    switch (struc) {
      case "SOS PE":
        structureName = 1;
        break;
      case "AGD":
        structureName = 2;
        break;
      case "REMAPLUS":
        structureName = 3;
        break;
      case "NAD NDB":
        structureName = 4;
        break;
      case "AFLM NDB":
        structureName = 5;
        break;
      case "NSA":
        structureName = 6;
        break;
      case "INTERFACE ACTION":
        structureName = 7;
        break;
      case "STOP SIDA":
        structureName = 8;
        break;
      case "PE NDB":
        structureName = 9;
        break;
      case "OMST SIDA ROSSO":
        structureName = 10;
        break;
      case "RRAJ NOUAKCHOTT":
        structureName = 11;
        break;
      case "FOR/MVD":
        structureName = 12;
        break;
      case "ASC NDB":
        structureName = 13;
        break;
    }
    return structureName;
  }

  willaya(dt1) {
    if (dt1 != null) {
      switch (dt1) {
        case "Hodh Charghi":
          return 1;
        case "Hodh Gharbii":
          return 2;
        case "Assaba":
          return 3;
        case "Gorgol":
          return 4;
        case "Brakna":
          return 5;
        case "Trarza":
          return 6;
        case "Adrar":
          return 7;
        case "Nouadhibou":
          return 8;
        case "Tagant":
          return 9;
        case "Guidimagha":
          return 10;
        case "Tiris Zemmour":
          return 11;
        case "Inchiri":
          return 12;
        case "Nouakchott Nord":
          return 13;
        case "Nouakchott Ouest":
          return 14;
        case "Nouakchott Sud":
          return 15;
      }
    }
    return null;
  }

  sexe(val) {
    if (val != null) {
      switch (val) {
        case "H":
          return 1;
        case "F":
          return 2;
      }
    }
    return null;
  }

  nationalite(nat) {
    if (nat != null) {
      switch (nat) {
        case "Autre nationalité":
          return 0;
        case "Mauritaniene":
          return 1;
        case "Sénégalaise":
          return 2;
        case "Maliennne":
          return 3;
        case "Ivoirienne":
          return 4;
        case "Guinéeene":
          return 5;
        case "Benénoise":
          return 6;
        case "Congolaise":
          return 7;
        case "Maroc":
          return 8;
        case "RSA":
          return 9;
      }
    }
    return null;
  }

  commune(com) {
    if (com != null) {
      switch (com) {
        case "Amourj":
          return 1;
        case "Abdel Bagrou":
          return 2;
        case "Bougadoum":
          return 3;
        case "Bassiknou":
          return 4;
        case "El Megve":
          return 5;
        case "Fessale":
          return 6;
        case "Dhar":
          return 7;
        case "Feireni":
          return 8;
        case "Beneamane":
          return 9;
        case "Oueinatt Ezbel":
          return 10;
        case "Ghlig Ehel Beye":
          return 11;
        case "Ksar El Barke":
          return 12;
        case "Djiguenni":
          return 13;
        case "Mabrouk":
          return 14;
        case "Nema":
          return 15;
        case "Achemime":
          return 16;
        case "Jreif":
          return 17;
        case "Bangou":
          return 18;
        case "Hassi Etile":
          return 19;
        case "Oum Avnadech":
          return 20;
        case "El Mabrouk":
          return 21;
        case "Beribavat":
          return 22;
        case "Noual":
          return 23;
        case "Agoueinit":
          return 24;
        case "Oualata":
          return 25;
        case "Timbedra":
          return 26;
        case "Touil":
          return 27;
        case "Koumbi Saleh":
          return 28;
        case "Bousteille":
          return 29;
        case "Hassi Mhadi":
          return 30;
        case "Tenhemade":
          return 31;
        case "Aioun":
          return 32;
        case "Nsavenni":
          return 33;
        case "Doueirare":
          return 34;
        case "Ten Hamad":
          return 35;
        case "Beneamane":
          return 36;
        case "Egjert":
          return 37;
        case "Oum Lahydh":
          return 38;
      }
    }
    return null;
  }

  moughata(mough) {
    if (mough != null) {
      switch (mough) {
        case "AMOURJ":
          return 1;
        case "BASSIKNOU":
          return 2;
        case "DJIGUENNI":
          return 3;
        case "NEMA":
          return 4;
        case "OUALATA":
          return 5;
        case "TIMBEDRA":
          return 6;
        case "AIOUN":
          return 7;
        case "KOUBENNI":
          return 8;
        case "TAMCHEKETT":
          return 9;
        case "TINTANE":
          return 10;
        case "BARKEOL":
          return 11;
        case "BOUMDEID":
          return 12;
        case "GUEROU":
          return 13;
        case "KANKOSSA":
          return 14;
        case "KIFFA":
          return 15;
        case "KAEDI":
          return 16;
        case "MAGHAMA":
          return 17;
        case "MBOUD":
          return 18;
        case "MOUNGUEL":
          return 19;
        case "ALEG":
          return 20;
        case "BABABE":
          return 21;
        case "BOGUE":
          return 22;
        case "MAGHTA LAHJAR":
          return 23;
        case "MBAGNE":
          return 24;
        case "BOUTILIMIT":
          return 25;
        case "KEURMACENE":
          return 26;
        case "MEDERDRA":
          return 27;
        case "OUAD NAGA":
          return 28;
        case "RKIZ":
          return 29;
        case "ROSSO":
          return 30;
        case "AOUJEFT":
          return 31;
        case "ATAR":
          return 32;
        case "CHINGUITTI":
          return 33;
        case "OUADANE":
          return 34;
        case "NOUADHIBOU":
          return 35;
        case "MOUDJERIA":
          return 36;
        case "TICHIT":
          return 37;
        case "TIDJIKJA":
          return 38;
        case "OULD YENGE":
          return 39;
        case "SELIBABI":
          return 40;
        case "GHABOU":
          return 41;
        case "BIRMOUGREIN":
          return 42;
        case "FDERICK":
          return 43;
        case "ZOUERAT":
          return 44;
        case "AKJOUJT":
          return 45;
        case "ECHAMI":
          return 46;
        case "TOUJOUNINE":
          return 47;
        case "DAR NAIM":
          return 48;
        case "TEYARETT":
          return 49;
        case "KSAR":
          return 50;
        case "TEVRAGH ZEINA":
          return 51;
        case "SEBKHA":
          return 52;
        case "EL MINA":
          return 53;
        case "RIYADH":
          return 54;
        case "ARAFAT":
          return 55;
      }
    }
    return null;
  }

  situationmatrim(situation) {
    if (situation != null) {
      switch (situation) {
        case "Célibatraire":
          return 1;
        case "Concubinage":
          return 2;
        case "Divorcé(e)":
          return 3;
        case "Marié(e)":
          return 4;
        case "Veuf(ve)":
          return 5;
      }
    }
    return null;
  }

  nomSite(nom) {
    if (nom != null) {
      switch (nom) {
        case "site 1":
          return 1;
        case "site 2":
          return 2;
        case "site 3":
          return 3;
        case "site 4":
          return 4;
      }
    }
    return null;
  }

  niveauScolaire(valeur) {
    if (valeur != null) {
      switch (valeur) {
        case "Analphabète":
          return 1;
        case "Primaire":
          return 2;
        case "Secondaire":
          return 3;
        case "Supérieur":
          return 4;
        case "Couranique/Mahadra":
          return 5;
        case "Autres":
          return 6;
      }
    }
    return null;
  }

  typeCas(type) {
    if (type != null) {
      switch (type) {
        case "Nouveau cas":
          return 1;
        case "Existant, Retourner et le selectionner parmi la liste":
          return 2;
      }
    }
    return null;
  }

  categorie(d) {
    if (d != null) {
      switch (d) {
        case "PS":
          return 1;
        case "HSH":
          return 2;
      }
    }
    return null;
  }

  valCategorie(d) {
    if (d != null) {
      switch (d) {
        case 1:
          return "PS";
        case 2:
          return "HSH";
      }
    }
    return null;
  }

  update() {
    this.level1.level = this.data.id1;
    this.level1.ido = this.indentificationForm.get("Prenom").value
    this.level1.id01 = this.indentificationForm.get("prenom_mere").value
    this.level1.id02 = this.indentificationForm.get("prenom_pere").value
    this.level1.id03 = this.indentificationForm.get("annee_naissance").value
    this.level1.id04 = this.categorie(this.indentificationForm.get("categorie").value)
    this.levelservice.update(this.data.id1, this.level1).subscribe(valeur => {
      if (valeur) {
        this.message1 = valeur;
      }
    })

    this.localisation.localisation_id = this.data.id2;
    this.localisation.id1 = this.willaya(this.indentificationForm.get("willayaa").value)
    this.localisation.id2 = this.moughata(this.indentificationForm.get("moughata").value)
    this.localisation.id3 = this.commune(this.indentificationForm.get("commune").value)
    this.localisation.sexe = this.sexe(this.indentificationForm.get("sexe").value)
    this.localisation.date = parseInt(this.indentificationForm.get("date_identification").value)
    this.localisation.nationalite = this.nationalite(this.indentificationForm.get("nationnalte").value)
    this.localisation.autre_nat = this.indentificationForm.get("autre_nationnalite").value
    this.localisation.nom_site = this.nomSite(this.indentificationForm.get("nom_site").value)
    this.localisation.autre_site = this.indentificationForm.get("autre_site").value
    this.localisation.telephone = this.indentificationForm.get("telephone").value
    this.localisation.age = this.indentificationForm.get("age").value
    this.localisation.situation_matrim = this.situationmatrim(this.indentificationForm.get("situation_matrim").value)
    this.localisation.niveau_scol = this.niveauScolaire(this.indentificationForm.get("niveau_scolaire").value)
    this.localisationService.upadateLocalisation(this.data.id2, this.localisation).subscribe(element => {
      if (element) {
        this.message2 = element;
      }
    })



    this.inf_intervention.inf_intervenant_id = this.data.id3
    this.inf_intervention.intervenant = this.getStructurenum(this.indentificationForm.get("nom_structure").value)
    this.inf_intervention.date_interview = parseInt(this.indentificationForm.get("date_saisie").value)
    this.inf_intervention.date_modif = parseInt(this.indentificationForm.get("date_dernienre_modif").value)
    this.inf_intervention.type_cas = this.typeCas(this.indentificationForm.get("type_cas").value)
    this.infinterventionService.updateInfIntervenant(this.data.id3, this.inf_intervention).subscribe(val => {
      if (val) {
        this.message3 = val;
      }
    })
    this.onClose()
  }

  onClear() {
    this.dialogRef.close();
  }

  onClose() {
    this.indentificationForm.reset();
    this.dialogRef.close();
  }

  currentForm() {
    this.levelservice.findByIdLevel(this.data.id1).subscribe(val => {
      if (val) {
        this.alllevels = val;
        this.indentificationForm.get("Prenom").setValue(this.alllevels.prenom)
        console.log("prenonm de la personne" + this.alllevels.prenom)
        this.indentificationForm.get("prenom_mere").setValue(this.alllevels.prenom_mere)
        this.indentificationForm.get("prenom_pere").setValue(this.alllevels.prenom_pere)
        this.indentificationForm.get("annee_naissance").setValue(this.alllevels.anneeNaissance)
        this.indentificationForm.get("categorie").setValue(this.valCategorie(this.alllevels.categorie))
        this.indentificationForm.get("willayaa").setValue(this.alllevels.wilaya)
        console.log("willaya" + this.alllevels.wilaya)
        this.indentificationForm.get("moughata").setValue(this.alllevels.moughata)
        this.indentificationForm.get("commune").setValue(this.alllevels.commune)
        this.indentificationForm.get("sexe").setValue(this.alllevels.sexe)
        this.indentificationForm.get("date_identification").setValue(this.alllevels.date_indentification)
        this.indentificationForm.get("nationnalte").setValue(this.alllevels.nationalite)
        this.indentificationForm.get("autre_nationnalite").setValue(this.alllevels.autre_nationnalite)
        this.indentificationForm.get("nom_site").setValue(this.alllevels.site)
        this.indentificationForm.get("autre_site").setValue(this.alllevels.autre_site)
        this.indentificationForm.get("telephone").setValue(this.alllevels.telephone)
        this.indentificationForm.get("age").setValue(this.alllevels.age)
        this.indentificationForm.get("situation_matrim").setValue(this.alllevels.situation_matrim)
        this.indentificationForm.get("niveau_scolaire").setValue(this.alllevels.niveauSocial)
        this.indentificationForm.get("nom_structure").setValue(this.alllevels.structurelle)
        this.indentificationForm.get("date_saisie").setValue(this.alllevels.dateInterview)
        this.indentificationForm.get("date_dernienre_modif").setValue(this.alllevels.date_modif)
        this.indentificationForm.get("type_cas").setValue(this.alllevels.typecas)
      }
    })
  }

}
