import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertModule} from "ngx-bootstrap";
import {HomeComponent} from "./home/home.component";
import {TopNavComponent} from "./top-nav/top-nav.component";
import {TutorialsComponent} from "./tutorials/tutorials.component";
import {FooterComponent} from "./footer/footer.component";
import {AboutComponent} from "./about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    TutorialsComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
