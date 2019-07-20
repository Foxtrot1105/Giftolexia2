import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './acra-common/layout/layout-page/layout.component';
import { HomeComponent } from './acra/home-page/home/home.component';
import { ResourceCentreComponent } from './acra/document-management-page/resource-centre/resource-centre.component';
import { LoginComponent } from './login/login/login.component';
import { FaqDocumentationComponent } from './acra/market-management-page/faq-documentation/faq-documentation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent, //canActivate: [AuthGaurd]
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'resourceCentre',
        component: ResourceCentreComponent
      },
      // {
      //   path: 'apiDocumentation',
      //   component: ApiDocumentationComponent
      // },
      // {
      //   path: 'subscription',
      //   component: SubscriptionManagementComponent
      // },
      // {
      //   path: 'group',
      //   component: GroupViewManagementComponent
      // },
      {
        path: 'faq',
        component: FaqDocumentationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
