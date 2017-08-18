import { RouterModule, Routes} from '@angular/router';

// Páginas
import { AboutComponent, HomeComponent, ItemComponent } from './components/index.paginas';

const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent }, 
	{ path: 'about', component: AboutComponent },
	{ path: 'item', component: ItemComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });