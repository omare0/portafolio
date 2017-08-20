import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// Services
import { ProductosService } from '../../services/productos.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
})

export class SearchComponent {

	termino: string = undefined;

	constructor( private route: ActivatedRoute, private _productosService: ProductosService ) {

		route.params.subscribe(parametros => {

			this.termino = parametros['termino'];

			_productosService.buscar_productos( this.termino );

		});

	}

}
