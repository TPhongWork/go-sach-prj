import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RibbonSlidesComponent } from '../../base/ribbon-slides/ribbon-slides.component';
import { CompanyData } from '../../../../assets/data/common/company-data';
import FactoryData from '../../../../assets/data/factory-pages/factory-data';

@Component({
  selector: 'app-factory-pages',
  standalone: true,
  imports: [
    CommonModule,
    RibbonSlidesComponent
  ],
  templateUrl: './factory-pages.component.html',
  styleUrl: './factory-pages.component.css'
})
export class FactoryPagesComponent implements OnInit  {
  urlEmployeeFactory:string[] = [
  ];
  companyData:any={}
  ngOnInit(): void {
    this.companyData = CompanyData;
    this.urlEmployeeFactory = FactoryData.listImg;
  }
}
