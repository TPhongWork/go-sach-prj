import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AboutUsDataMain } from '../../../../assets/data/main-pages/about/aboutus';
import { ContactData, SaleTeam } from '../../../../assets/data/main-pages/contact/contact';
import {
  FactAboutFactory,
  FactoryMainData,
} from '../../../../assets/data/main-pages/factory/factory-main';
import { FeedbackData } from '../../../../assets/data/main-pages/feedback/Feedback';
import {
  ListTypeProduct,
  ProductMainData
} from '../../../../assets/data/main-pages/product/product.main';
import {
  CallActionData,
  ReasonUsingProductData,
} from '../../../../assets/data/main-pages/reason/ReasonData';
import {
  BottomSlide,
  SlideImageMain,
  TitleSlide,
} from '../../../../assets/data/main-pages/slide/SlideImage';
import { ProductData } from '../../../../assets/data/product-pages/product-data';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit, AfterViewInit {
  //slides
  listSlide: string[] = [];
  titleSlide: any = {};
  listBottomSlide: any = [];
  touchStartX = 0;
  touchEndX = 0;
  activeIndex = 0;

  //About us
  aboutUs: any = {};

  //Reason using
  reasonUseData: any = {};

  //Call action
  callAction: any = {};

  //Feedback
  feedBack: any = {};

  //Output factory
  outputFactory: any = {};
  factFactory: any = {};

  //Contact
  contactData: any = {};
  teamSales: any = {};

  // Product
  listProduct: any[] = [];
  listTypeProduct: any[] = [];
  selectedTypeProductFilter = 'All';
  filteredTypeProduct: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.titleSlide = TitleSlide;
    this.listSlide = SlideImageMain;
    this.listBottomSlide = BottomSlide;
    this.aboutUs = AboutUsDataMain;
    this.listTypeProduct = ListTypeProduct;
    this.listProduct = ProductMainData;
    this.filteredTypeProduct = this.listProduct;
    this.reasonUseData = ReasonUsingProductData;
    this.callAction = CallActionData;
    this.outputFactory = FactoryMainData;
    this.factFactory = FactAboutFactory;
    this.feedBack = FeedbackData;
    this.teamSales = SaleTeam;
    this.contactData = ContactData
    if (isPlatformBrowser(this.platformId)) {
      this.setupSwipeEvents();
    }
    
  }

  onFilterClick(filter: string): void {
    this.selectedTypeProductFilter = filter;

    if (filter === 'All') {
      this.filteredTypeProduct = this.listProduct;
    } else {
      this.filteredTypeProduct = this.listProduct.filter((item) =>
        item.type.includes(filter)
      );
    }
  }

  setupSwipeEvents(): void {
    const carouselElement = document.getElementById('introCarousel');

    // Kiểm tra nếu carouselElement tồn tại
    if (carouselElement) {
      carouselElement.addEventListener('touchstart', (event: TouchEvent) => {
        this.touchStartX = event.changedTouches[0].screenX;
      });

      carouselElement.addEventListener('touchend', (event: TouchEvent) => {
        this.touchEndX = event.changedTouches[0].screenX;
        this.handleSwipeGesture();
      });
    } else {
      console.error("Carousel element with ID 'introCarousel' not found.");
    }
  }

  handleSwipeGesture(): void {
    const carousel = document.querySelector('.carousel') as any;
    if (carousel) {
      if (this.touchStartX - this.touchEndX > 50) {
        // Swipe left
        carousel.carousel('next');
      }
      if (this.touchEndX - this.touchStartX > 50) {
        // Swipe right
        carousel.carousel('prev');
      }
    } else {
      console.error('Carousel element not found.');
    }
  }
  goToSlide(index: number): void {
    this.activeIndex = index;
  }
}
