import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {
  @Input() cssid: string = '';
  @Input() productname: string = '';
  @Input() productimages: any;
  @Input() category: string = 'Jakna';
  @Input() price: number = 0;

  productprice: string = '';
  productcurrentimage: string = '';
  constructor() { }

  ngOnInit(): void {
    this.productprice = String(this.price.toLocaleString('en-US')) + ' РСД';
    this.productcurrentimage = this.productimages['Image1'];
  }

  SecondImage() {
    this.productcurrentimage = this.productimages['Image2'];
  }

  FirstImage() {
    this.productcurrentimage = this.productimages['Image1'];
  }
}
