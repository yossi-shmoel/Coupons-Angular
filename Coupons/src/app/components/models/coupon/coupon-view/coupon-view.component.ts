import { ActivatedRoute } from '@angular/router';
import { CouponsService } from './../../../../services/coupons.service';
import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-coupon-view',
  templateUrl: './coupon-view.component.html',
  styleUrls: ['./coupon-view.component.css']
})
export class CouponViewComponent implements OnInit {

  coupons: Coupon[] = [];
  coupon: Coupon;

  constructor(private couponsService: CouponsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const couponId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    if (couponId === 0) {
      this.couponsService.GetAll().subscribe(c => this.coupons = c);
    } else {
      this.couponsService.Get(couponId).subscribe(c => {
        this.coupon = c;
        this.coupons.push(new Coupon(this.coupon.Name, this.coupon.CompanyId, this.coupon.Start_Date,
          this.coupon.End_Date, this.coupon.Amount,
          this.coupon.Type, this.coupon.Message, this.coupon.Price, this.coupon.Image, this.coupon.Id));
      });
    }
  }

}
