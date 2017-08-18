import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

	info: any = {};
	equipo: any = [];
	cargada: boolean= false;

	constructor( public http:Http) {

		this.cargaInfo();
		this.cargaSobreNosotros();

	}

	public cargaInfo() {

		this.http.get("assets/data/info.pagina.json")
				.subscribe( data => {
					this.cargada= true;
					this.info = data.json();
				});

	}

	public cargaSobreNosotros() {

		this.http.get("https://portafolio-12697.firebaseio.com/equipo.json")
				.subscribe( data => {
					this.cargada= true;
					this.equipo = data.json();
				});

	}

}
