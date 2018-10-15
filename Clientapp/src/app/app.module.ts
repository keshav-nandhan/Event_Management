import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import{CarouselBarComponent} from './carousel-bar/carousel-bar.component';
import { MainPanelDivComponent } from './main-panel-div/main-panel-div.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    CarouselBarComponent,
    MainPanelDivComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
