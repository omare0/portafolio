import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// Services
import { ProductosService } from '../../services/productos.service';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html'
})

export class ItemComponent {

	idProducto: string;
	producto: any = undefined;

	constructor( public route: ActivatedRoute, public _productosService: ProductosService ) {

		route.params.subscribe(parametros => {

			this.idProducto = parametros['id'];
			
			_productosService.cargar_producto(parametros['id'])
							.subscribe(data => { 

								this.producto = data.json();
							
							});

		});
	}
}
