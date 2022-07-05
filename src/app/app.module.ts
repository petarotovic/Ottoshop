import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartingPageComponent } from './StartingPage/starting-page/starting-page.component';
import { StyleDirective } from './Directives/style.directive';
import { HeaderBannerMessageComponent } from './header/header-banner-message/header-banner-message.component';
import { MainHeaderDivComponent } from './header/main-header-div/main-header-div.component';
import { SizeDirective } from './Directives/size.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartingPageComponent,
    StyleDirective,
    HeaderBannerMessageComponent,
    MainHeaderDivComponent,
    SizeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
