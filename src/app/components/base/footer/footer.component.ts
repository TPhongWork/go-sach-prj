import { Component, OnInit } from '@angular/core';
import { CompanyData } from '../../../../assets/data/common/company-data';
import { CommonModule } from '@angular/common';
import { ProductData } from '../../../../assets/data/product-pages/product-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  companyData:any={};
  productData:any={};
  ngOnInit(): void {
    this.companyData = CompanyData;
    this.productData = ProductData;
  }
}
