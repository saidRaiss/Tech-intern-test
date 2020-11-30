import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "src/environments/environment";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { HeaderModule } from './core/header/header.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './core/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DataComponent } from './data/data.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CreditCardComponent } from './core/component/credit-card/credit-card.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './core/button/button.component';
// ******************** This ListUrlsComponent Is Unused *********************
import { ListUrlsComponent } from './data/list-urls/list-urls.component'
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    DataComponent,
    SettingsComponent,
    PageNotFoundComponent,
    CreditCardComponent,
    ButtonComponent,
    ListUrlsComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    DragDropModule,
    HeaderModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
