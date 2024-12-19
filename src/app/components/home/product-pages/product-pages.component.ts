import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../assets/data/product-pages/product-interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AboutProduct, ProductData } from '../../../../assets/data/product-pages/product-data';

@Component({
  selector: 'app-product-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-pages.component.html',
  styleUrl: './product-pages.component.css'
})
export class ProductPagesComponent implements OnInit {
  listProduct: any[] = [];
  aboutProduct: any = {}; 
  ngOnInit(): void {
    this.listProduct = ProductData;
    this.aboutProduct = AboutProduct;
  }

  constructor(
    private router: Router
  ){
  }

  navigateToPage(slug:string) {
    console.log(slug);
    this.router.navigate(['/san-pham/',slug]);
    
  }

}
