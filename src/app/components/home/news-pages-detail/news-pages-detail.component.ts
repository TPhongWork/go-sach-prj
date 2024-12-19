import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewsData } from '../../../../assets/data/main-pages/news/news-data';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-pages-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './news-pages-detail.component.html',
  styleUrl: './news-pages-detail.component.css'
})
export class NewsPagesDetailComponent implements OnInit {
  listNew: any = [];
  private routeSub: Subscription | undefined;
  slugNews!: string | null ;
  news: any = {};
  constructor(private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.slugNews = params['slug'];
      this.takeDataNews();
    });
  }
  takeDataNews(){
    this.listNew = NewsData;
    for (const element of this.listNew) {
      if(element.slug == this.slugNews ){
        this.news = element
      }
    }
  }
}
