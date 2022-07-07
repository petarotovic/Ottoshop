import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartingPageComponent } from './StartingPage/starting-page/starting-page.component';
import { HeaderbannerComponent } from './header/headerbanner/headerbanner.component';
import { ButtonComponent } from './Generators/button-generator/button.component';
import { MaindivComponent } from './header/maindiv/maindiv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartingPageComponent,
    HeaderbannerComponent,
    ButtonComponent,
    MaindivComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
