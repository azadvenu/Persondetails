import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonEntryComponent } from './person-entry/person-entry.component';
import { ViewallPersonComponent } from './viewall-person/viewall-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


const approutes: Routes = [
  {path:"",component:PersonEntryComponent},
  {path:"viewall",component:ViewallPersonComponent},
  {path:"update",component:UpdatePersonComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PersonEntryComponent,
    ViewallPersonComponent,
    UpdatePersonComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
