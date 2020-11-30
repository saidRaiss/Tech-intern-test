import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';

import { MatToolbarModule } from '@angular/material/toolbar'
// import { MatIconModule } from '@angular/material/icon';
// import { MatSidenavModule } from '@angular/material/sidenav'
// import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    BrowserModule,
    HeaderRoutingModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }