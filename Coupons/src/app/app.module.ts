import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
