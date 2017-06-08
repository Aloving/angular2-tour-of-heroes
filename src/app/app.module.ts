import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './hero-detail-component/hero-detail.component';
import { HeroesComponent }      from './heroes-components/heroes.component';
import { HeroService } from './shared/hero.service';
import { DashboardComponent }   from './dashboard-component/dashboard.component';
import { HeroSearchComponent } from './hero-search-component/hero-search.component';

@NgModule({
	imports:      [ 
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
	],
	declarations: [ 
		AppComponent,
		HeroDetailComponent,
		HeroesComponent,
		DashboardComponent,
		HeroSearchComponent
	],
	providers: [
		HeroService
	],
	bootstrap:	[ AppComponent ]
})
export class AppModule { }
