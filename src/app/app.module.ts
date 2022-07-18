import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartingPageComponent } from './StartingPage/starting-page/starting-page.component';
import { HeaderbannerComponent } from './header/headerbanner/headerbanner.component';
import { ButtonComponent } from './Generators/button-generator/button.component';
import { MaindivComponent } from './header/maindiv/maindiv.component';
import { AnchorTabComponent } from './Generators/anchor-tab/anchor-tab.component';
import { ContentComponent } from './content/content/content.component';
import { BannerimagesComponent } from './content/content/bannerimages/bannerimages.component';
import { ProductsStripeComponent } from './content/content/productsstripe/productsstripe.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StripetitleComponent } from './content/content/productsstripe/stripetitle/stripetitle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartingPageComponent,
    HeaderbannerComponent,
    ButtonComponent,
    MaindivComponent,
    AnchorTabComponent,
    ContentComponent,
    BannerimagesComponent,
    ProductsStripeComponent,
    StripetitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
