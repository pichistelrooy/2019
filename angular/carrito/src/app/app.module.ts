import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChartComponent } from './components/chart/chart.component';
import { ProductChartComponent } from './components/product-chart/product-chart.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    NavbarComponent,
    FooterComponent,
    ChartComponent,
    ProductChartComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
