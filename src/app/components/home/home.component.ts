import { Component } from '@angular/core';

// Services
import { ProductosService } from '../../services/productos.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})

export class HomeComponent {

	constructor(public _productosService: ProductosService) {

	}

}
