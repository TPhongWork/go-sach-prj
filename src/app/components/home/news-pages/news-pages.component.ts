import { Component, OnInit } from '@angular/core';
import { NewsData } from '../../../../assets/data/main-pages/news/news-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-pages',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './news-pages.component.html',
  styleUrl: './news-pages.component.css'
})
export class NewsPagesComponent implements OnInit {
  listNew: any = [];
  ngOnInit(): void {
    this.listNew = NewsData;
  }
}
