import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productsstripe',
  templateUrl: './productsstripe.component.html',
  styleUrls: ['./productsstripe.component.scss']
})
export class ProductsStripeComponent implements OnInit {
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
    
  }
}
