import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BaseComponent } from './components/layout/base/base.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { UserViewComponent } from './components/models/user/user-view/user-view.component';
import { CouponViewComponent } from './components/models/coupon/coupon-view/coupon-view.component';
import { UserUpdateComponent } from './components/models/user/user-update/user-update.component';
import { UserAddComponent } from './components/models/user/user-add/user-add.component';
import { CouponUpdateComponent } from './components/models/coupon/coupon-update/coupon-update.component';
import { CouponAddComponent } from './components/models/coupon/coupon-add/coupon-add.component';
import { CompanyViewComponent } from './components/models/company/company-view/company-view.component';
import { CompanyUpdateComponent } from './components/models/company/company-update/company-update.component';
import { CompanyAddComponent } from './components/models/company/company-add/company-add.component';
import { CompaniesViewerComponent } from './components/models/view/companies-viewer/companies-viewer.component';
import { CouponsViewerComponent } from './components/models/view/coupons-viewer/coupons-viewer.component';
import { UsersViewerComponent } from './components/models/view/users-viewer/users-viewer.component';

const routes: Routes  = [
  { path: '', redirectTo: 'view-users', pathMatch: 'full'}, // default path - pathMatch: make sure the whole path is empty string
  { path: 'view-users', component: UsersViewerComponent},
  { path: 'view-companies', component: CompaniesViewerComponent},
  { path: 'view-coupons', component: CouponsViewerComponent}
 // { path: '**', component: Page404Component}
  ];



@NgModule({
  declarations: [
    BaseComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    UserViewComponent,
    CouponViewComponent,
    UserUpdateComponent,
    UserAddComponent,
    CouponUpdateComponent,
    CouponAddComponent,
    CompanyViewComponent,
    CompanyUpdateComponent,
    CompanyAddComponent,
    CompaniesViewerComponent,
    CouponsViewerComponent,
    UsersViewerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule, // Routing Module import
    RouterModule.forRoot(routes) // Our routes import
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
