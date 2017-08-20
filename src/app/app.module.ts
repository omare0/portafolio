import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { InformacionService } from './services/informacion.service';
import { ProductosService } from './services/productos.service';

// Pages
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		AboutComponent,
		ItemComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		APP_ROUTING
	],
	providers: [
		InformacionService,
		ProductosService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
