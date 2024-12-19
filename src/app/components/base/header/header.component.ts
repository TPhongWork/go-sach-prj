import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductMainData } from '../../../../assets/data/main-pages/product/product.main';
import { CommonModule } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit{
  constructor(private router: Router) {}
  listProduct: any[] = [];
  ngOnInit(): void {
    this.listProduct = ProductMainData;
  }
  goNavigate(navigate:string) {
    // Điều hướng về trang chủ và tải lại trang
    this.router.navigate([navigate], { replaceUrl: true }).then(() => {
      window.location.reload();
    });
  }
  ngAfterViewInit(): void {
    $(document).on('click', '.menu-has-children i', (e:any) => {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e:any) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e:any) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  }
}
