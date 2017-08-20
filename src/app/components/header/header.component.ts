import { Component} from '@angular/core';
import { Router } from '@angular/router'

// Services
import { InformacionService } from '../../services/informacion.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
})

export class HeaderComponent {

	constructor(public _informacionService: InformacionService, public router: Router) {

	}

	buscar_producto(termino: string) {

		this.router.navigate(['search', termino]);

	}

}
