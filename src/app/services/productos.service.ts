import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

	productos: any[] = [];
	cargando: boolean = true;

	constructor( public http:Http ) {

		this.cargar_productos();

	}

	public cargar_productos() {

		this.cargando = true;

		this.http.get("https://portafolio-12697.firebaseio.com/productos_idx.json")
				.subscribe( data => {

					this.productos = data.json();

					console.log(this.productos);

					this.cargando = false;
				});

	}

}
