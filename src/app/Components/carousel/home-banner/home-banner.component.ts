import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit{
  screenWidth!:number;
  isMobileScreen!:boolean;
  imgHead!:string;
  

  imageSm! :any;
  imageSdf! :any;
  imageSic! :any;
  imageIotpd!:any;

  imgUrlContainer= [{
    sm_d:"assets/img/carousel/main/1.jpg", sm_m:"assets/img/carousel/main/1m.jpg",
    sdf_d:"assets/img/carousel/main/2.jpg", sdf_m:"assets/img/carousel/main/2m.jpg",
    sic_d:"assets/img/carousel/main/3.jpg", sic_m:"assets/img/carousel/main/3m.jpg",
    iotpd_d:"assets/img/carousel/main/4.jpg", iotpd_m:"assets/img/carousel/main/4m.jpg",
  }]

  servicesDescr:string[] = ['CONSULTORÍA E INGENIERÍA','Pequeña descripción del servicio mostrado Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'CONSTRUCCIÓN','Pequeña descripción del servicio mostrado Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'MANTENIMIENTO Y OTROS','Pequeña descripción del servicio mostrado Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'PINTURA','Pequeña descripción del servicio mostrado Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'];
  
  // servicesDescr = [{
  //   sm: 'We can help your business predict future trends by analyzing vast amounts of data and identifying patterns and relationships that are not easily visible to humans',
  //   sds: 'We can help your business detect anomalies, assign risk scores to transactions or users indicating the likelihood of fraud. We can help prioritize investigation....',
  //   sic: 'We can help your business understand and interpret visual content, similar to how humans recognize objects or patterns in images. Image classification with AI...',
  //   iotpd: 'We offer a comprehensive range of IoT product development services tailored to meet your specific needs and unlock the full potential of connected devices.',
  // }];


  
  slidesStore = [
    {id: "1", img: this.imageSm, clase:"img-container-sm", alt:this.servicesDescr[0], title:this.servicesDescr[0], description:this.servicesDescr[1], url:"/smart-marketing"},
    {id: "2", img: this.imageSdf, clase:"img-container-sdf", alt:this.servicesDescr[2], title:this.servicesDescr[2], description:this.servicesDescr[3], url:"/smart-data-safetly"},
    {id: "3", img: this.imageSic, clase:"img-container-sic", alt:this.servicesDescr[4], title:this.servicesDescr[4], description:this.servicesDescr[5], url:"/smart-image-classification"},
    {id: "4", img: this.imageIotpd, clase:"img-container-iotpd", alt:this.servicesDescr[6], title:this.servicesDescr[6], description:this.servicesDescr[7], url:"/iot-product-development"}
  ]

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    
    if(this.screenWidth <=725){
      this.imageSm = this.imgUrlContainer.map(img =>{ return img.sm_m});
      this.imageSdf = this.imgUrlContainer.map(img =>{ return img.sdf_m});
      this.imageSic = this.imgUrlContainer.map(img =>{ return img.sic_m});
      this.imageIotpd = this.imgUrlContainer.map(img =>{ return img.iotpd_m});

      this.adaptImage();

    } else{
      this.imageSm = this.imgUrlContainer.map(img =>{ return img.sm_d});
      this.imageSdf = this.imgUrlContainer.map(img =>{ return img.sdf_d});
      this.imageSic = this.imgUrlContainer.map(img =>{ return img.sic_d});
      this.imageIotpd = this.imgUrlContainer.map(img =>{ return img.iotpd_d});

      this.adaptImage();
    }
    
  }

  
  onResize(e:any){
    this.screenWidth = window.innerWidth;

    if(this.screenWidth <=725){
      this.imageSm = this.imgUrlContainer.map(img =>{ return img.sm_m});
      this.imageSdf = this.imgUrlContainer.map(img =>{ return img.sdf_m});
      this.imageSic = this.imgUrlContainer.map(img =>{ return img.sic_m});
      this.imageIotpd = this.imgUrlContainer.map(img =>{ return img.iotpd_m});

      this.adaptImage();

    } else{
      this.imageSm = this.imgUrlContainer.map(img =>{ return img.sm_d});
      this.imageSdf = this.imgUrlContainer.map(img =>{ return img.sdf_d});
      this.imageSic = this.imgUrlContainer.map(img =>{ return img.sic_d});
      this.imageIotpd = this.imgUrlContainer.map(img =>{ return img.iotpd_d});
      this.adaptImage();
     
    }

  }


  //CAROUSEL
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    navSpeed: 500,
    autoplaySpeed:500,
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
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  adaptImage(){
    this.slidesStore = [
      {id: "1", img: this.imageSm, clase:"img-container-sm", alt:this.servicesDescr[0], title:this.servicesDescr[0], description:this.servicesDescr[1], url:"/smart-marketing"},
      {id: "2", img: this.imageSdf, clase:"img-container-sdf", alt:this.servicesDescr[2], title:this.servicesDescr[2], description:this.servicesDescr[3], url:"/smart-data-safetly"},
      {id: "3", img: this.imageSic, clase:"img-container-sic", alt:this.servicesDescr[4], title:this.servicesDescr[4], description:this.servicesDescr[5], url:"/smart-image-classification"},
      {id: "4", img: this.imageIotpd, clase:"img-container-iotpd", alt:this.servicesDescr[6], title:this.servicesDescr[6], description:this.servicesDescr[7], url:"/iot-product-development"}
    ]
  }
}
