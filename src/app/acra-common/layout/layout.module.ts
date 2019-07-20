import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SideNavComponent } from '../side_nav/side-nav.component';
import { AuthLayoutComponent } from './auth_layout/auth_layout.component';
import { LayoutComponent } from './layout-page/layout.component';
// import { SidebarDirective } from '../side_nav/sidebar.directive';
import { MaterialModule } from 'app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    AuthLayoutComponent,
    LayoutComponent
    // SidebarDirective
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    AuthLayoutComponent,
    LayoutComponent
  ]
})
export class LayoutsModule {}
