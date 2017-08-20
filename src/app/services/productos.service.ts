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
					this.cargando = false;

				});

	}

	public cargar_producto(idProducto: string) {

		return this.http.get("https://portafolio-12697.firebaseio.com/productos/" + idProducto + ".json");

	}

}
