import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartingPageComponent } from './StartingPage/starting-page/starting-page.component';
import { SizeDirective } from './Directives/size.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartingPageComponent,
    SizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
