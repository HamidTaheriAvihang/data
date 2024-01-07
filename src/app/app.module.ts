import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ServicesTableComponent } from './services-table/services-table.component';
import { ServicesFormComponent } from './services-form/services-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicesTableComponent,
    ServicesFormComponent
  ],
  imports: [
    MatAutocompleteModule, BrowserModule, HttpClientModule, BrowserAnimationsModule, MatTableModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, FormsModule, MatCardModule, MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
