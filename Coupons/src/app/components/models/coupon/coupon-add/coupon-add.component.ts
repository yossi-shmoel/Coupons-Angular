import { Coupon } from 'src/app/models/coupon';
import { CouponsService } from './../../../../services/coupons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-add',
  templateUrl: './coupon-add.component.html',
  styleUrls: ['./coupon-add.component.css']
})
export class CouponAddComponent implements OnInit {

  coupon = new Coupon(null, null, null, null, null, null, null, null, null);

  constructor(private couponsService: CouponsService) { }

  ngOnInit() {
  }

  private sendForm(): void {
    this.couponsService.CreateOrUpdate(this.coupon).subscribe();
  }

}
