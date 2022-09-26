import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { AddcourseComponent } from './addcourse/addcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewcourseComponent,
    AddcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
