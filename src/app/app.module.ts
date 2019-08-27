import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SearchbarComponent } from './components/shaerd/searchbar/searchbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { MainComponent } from './components/main/main.component';
import { StoreComponent } from './components/store/store.component';
import { FooterMenuComponent } from './components/shaerd/footer-menu/footer-menu.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeContentComponent,
    MainComponent,
    StoreComponent,
    FooterMenuComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
