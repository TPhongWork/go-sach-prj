import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../../assets/data/product-pages/product-interface';
import { Subscription } from 'rxjs';
import { AboutProduct, ProductData } from '../../../../assets/data/product-pages/product-data';

@Component({
  selector: 'app-product-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail-pages.component.html',
  styleUrl: './product-detail-pages.component.css'
})
export class ProductDetailPagesComponent implements OnInit {
  product: any = {}
  private routeSub: Subscription | undefined;
  slugProduct!: string | null ;
  aboutProduct: any={};
  listProduct: any[] =[];

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.aboutProduct = AboutProduct;
    this.routeSub = this.route.params.subscribe(params => {
      this.slugProduct = params['slug'];
      this.takeDataProduct();
    });

  }
  takeDataProduct(){
    this.listProduct = ProductData;
    for (const element of this.listProduct) {
      if(element.slug == this.slugProduct ){
        this.product = element
      }
    }
  }


}
