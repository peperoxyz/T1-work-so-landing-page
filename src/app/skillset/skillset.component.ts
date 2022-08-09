import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css'],
})
export class SkillsetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  config_testi: SwiperOptions = {
    navigation: false,
    spaceBetween: 10,
    slidesPerView: 1,
  };

  config: SwiperOptions = {
    navigation: true,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  };
}
