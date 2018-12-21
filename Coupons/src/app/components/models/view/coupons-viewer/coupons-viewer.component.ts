import { Coupon } from './../../../../models/coupon';
import { CouponsService } from './../../../../services/coupons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupons-viewer',
  templateUrl: './coupons-viewer.component.html',
  styleUrls: ['./coupons-viewer.component.css']
})
export class CouponsViewerComponent implements OnInit {

  public coupons: Coupon[];
  constructor(public couponService: CouponsService) { }

  ngOnInit() {
    this.couponService.GetAll().subscribe(c => this.coupons = c);
  }
}
