import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './acra/home-page/home/home.component';
import { ResourceCentreComponent } from './acra/document-management-page/resource-centre/resource-centre.component';
import { LayoutsModule } from './acra-common/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CoreService } from './acra-common/core.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { FaqDocumentationComponent } from './acra/market-management-page/faq-documentation/faq-documentation.component';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
import { DeleteComponent } from './acra/acra-shared/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ResourceCentreComponent,
    FaqDocumentationComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxChartsModule,
    ChartsModule
  ],
  providers: [
    CoreService,
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 2500, verticalPosition: 'top' }
    },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DeleteComponent]
})
export class AppModule {}
