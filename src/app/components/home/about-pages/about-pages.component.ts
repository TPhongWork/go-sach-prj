import { Component, OnInit } from '@angular/core';
import AboutPagesData from '../../../../assets/data/about-pages/about-page-data';
import { CommonModule } from '@angular/common';
import BrandData from '../../../../assets/data/brand/brand-data';

@Component({
  selector: 'app-about-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-pages.component.html',
  styleUrl: './about-pages.component.css'
})
export class AboutPagesComponent  implements OnInit{
  aboutInfoObject: any  = {};
  brandData :any = {};
  ngOnInit(): void {
    this.aboutInfoObject = AboutPagesData;
    this.brandData = BrandData;
  }
  
}
