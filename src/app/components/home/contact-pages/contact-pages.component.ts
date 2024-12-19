import { Component, OnInit } from '@angular/core';
import { ContactData, SaleTeam } from '../../../../assets/data/main-pages/contact/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-pages',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './contact-pages.component.html',
  styleUrl: './contact-pages.component.css'
})
export class ContactPagesComponent implements OnInit {
  teamSales:any={};
  contactData:any={};
  ngOnInit(): void {
    this.teamSales = SaleTeam;
    this.contactData = ContactData;
  }
}
