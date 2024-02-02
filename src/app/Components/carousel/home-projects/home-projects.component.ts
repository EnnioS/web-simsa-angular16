import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss']
})
export class HomeProjectsComponent {

  serviceOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:8000,
    navSpeed: 100,
    autoplaySpeed:1500,
    autoplayHoverPause:true,
    navText: ['<img src="assets/img/icons/left-arrow.svg">', '<img src="assets/img/icons/right-arrow.svg">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  


  slidesStore = [
    {id: '1', img: "assets/img/carousel/home/house.jpg", alt:"proyecto1", title:"Proyecto 1", description:"Descripci+on Proyecto 1",  url:"/smart-marketing"},
    {id: '2', img: "assets/img/carousel/home/house.jpg", alt:"proyecto2", title:"Proyecto 2", description:"Descripci+on Proyecto 2",  url:"/smart-data-safetly"},
    {id: '3', img: "assets/img/carousel/home/house.jpg", alt:"proyecto3", title:"Proyecto 3", description:"Descripci+on Proyecto 3",  url:"/smart-image-classification"},
    {id: '4', img: "assets/img/carousel/home/house.jpg", alt:"proyecto4", title:"Proyecto 4", description:"Descripci+on Proyecto 4",  url:"/iot-product-development"}
  ];

}

