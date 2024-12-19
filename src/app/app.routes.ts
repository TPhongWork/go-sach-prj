import { ActivatedRoute, Routes } from '@angular/router';
import { MainComponent } from './components/home/main/main.component';
import { AboutPagesComponent } from './components/home/about-pages/about-pages.component';
import { ProductPagesComponent } from './components/home/product-pages/product-pages.component';
import { FactoryPagesComponent } from './components/home/factory-pages/factory-pages.component';
import { ServicePagesComponent } from './components/home/service-pages/service-pages.component';
import { NewsPagesComponent } from './components/home/news-pages/news-pages.component';
import { ContactPagesComponent } from './components/home/contact-pages/contact-pages.component';
import { ProductDetailPagesComponent } from './components/home/product-detail-pages/product-detail-pages.component';

export const routes: Routes = [
    //Trang chủ
    {
        path:'',
        component: MainComponent,
    },
    // Giới thiệu
    {
        path:'gioi-thieu',
        loadComponent:() => import('./components/home/about-pages/about-pages.component').then(m=>m.AboutPagesComponent)
    },
    // Sản phẩm
    {
        path:'san-pham',
        loadComponent:() => import('./components/home/product-pages/product-pages.component').then(m=>m.ProductPagesComponent)

    },
    // Sản phẩm
    {
        path:'san-pham/:slug',
        loadComponent:() => import('./components/home/product-detail-pages/product-detail-pages.component').then(m=>m.ProductDetailPagesComponent)

    },
    // Nhà máy / xưởng
    {
        path:'dia-chi',
        loadComponent:() => import('./components/home/factory-pages/factory-pages.component').then(m=>m.FactoryPagesComponent)

    },
    // Dịch vụ
    {
        path:'dich-vu',
        loadComponent:() => import('./components/home/service-pages/service-pages.component').then(m=>m.ServicePagesComponent)

    },
    // Tin tức
    {
        path:'tin-tuc',
        loadComponent:() => import('./components/home/news-pages/news-pages.component').then(m=>m.NewsPagesComponent)
    },
    // Tin tức
    {
        path:'tin-tuc/:slug',
        loadComponent:() => import('./components/home/news-pages-detail/news-pages-detail.component').then(m=>m.NewsPagesDetailComponent)
    },
    // Liên hệ
    {
        path:'lien-he',
        loadComponent:() => import('./components/home/contact-pages/contact-pages.component').then(m=>m.ContactPagesComponent)

    },
    {
        path:'**',
        loadComponent:() => import('./components/home/about-pages/about-pages.component').then(m=>m.AboutPagesComponent)

    }
];
