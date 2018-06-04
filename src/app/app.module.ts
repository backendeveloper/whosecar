import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgAisModule } from 'angular-instantsearch';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FilterComponent } from './components/main/filter/filter.component';
import { ListComponent } from './components/main/list/list.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';

const routeConfig: Route[] = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    ListComponent,
    FooterComponent,
    MainComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    HttpClientModule,
    NgAisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
