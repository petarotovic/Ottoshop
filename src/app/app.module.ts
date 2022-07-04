import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartingPageComponent } from './StartingPage/starting-page/starting-page.component';
import { StyleDirective } from './Directives/style.directive';
import { HeaderBannerMessageComponent } from './Header/header-banner-message/header-banner-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartingPageComponent,
    StyleDirective,
    HeaderBannerMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
