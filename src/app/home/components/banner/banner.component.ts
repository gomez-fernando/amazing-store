import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;
  images: string[] = [
    'assets/images/slider-1.png',
    'assets/images/slider-2.png',
    'assets/images/slider-3.png'
  ];

  constructor() {}

  ngOnInit() { }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
    }
    });
    }
}
