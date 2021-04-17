import {Inf_intervention} from 'src/app/inf_intervention/Inf_intervention';
export interface Ilevel1{
    level: number;
    ido: String;
    id01: String;
    id02: String;
	id03: number;
	id04: number;
	biomedicale: object[];
	comportementale: object[];
    intervation: object[]; 
    inf_intervention: Inf_intervention[];
    localisation: object[];
	structurelle: object[];
}