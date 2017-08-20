import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

	productos: any[] = [];


	constructor( private http:Http ) {

		this.cargar_productos();
		
	}

	public cargar_productos() {

		if(this.productos.length === 0) {

			this.http.get("https://portafolio-12697.firebaseio.com/productos_idx.json")
					.subscribe( data => {
						this.productos = data.json();
					});

		}

	}

}
