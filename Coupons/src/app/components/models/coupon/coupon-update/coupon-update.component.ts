import { Coupon } from './../../../../models/coupon';
import { ActivatedRoute } from '@angular/router';
import { CouponsService } from './../../../../services/coupons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-update',
  templateUrl: './coupon-update.component.html',
  styleUrls: ['./coupon-update.component.css']
})
export class CouponUpdateComponent implements OnInit {

  // coupon: Coupon;
  coupon = new Coupon(null, null, null, null, null, null, null, null, null);

  constructor(private couponsService: CouponsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   // alert((new Date('2018.08.11').getTime() / 1000).toFixed(0));
    const couponId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    const ob = this.couponsService.Get(couponId).subscribe(c => this.coupon = c);
  }

}
