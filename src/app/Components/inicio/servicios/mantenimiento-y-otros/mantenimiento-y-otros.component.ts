import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalSeoService } from 'src/app/services/canonical-seo.service';

@Component({
  selector: 'app-mantenimiento-y-otros',
  templateUrl: './mantenimiento-y-otros.component.html',
  styleUrls: ['../../inicio.component.scss']
})
export class MantenimientoYOtrosComponent implements OnInit{
  constructor(
    private title:Title,
    private MetaTagService:Meta, 
    private CanonicalService: CanonicalSeoService) { 
    
  }
  ngOnInit(): void {
      
   //METADATA

   this.title.setTitle('MANTENIMIENTO Y OTROS | SIMSA');
   this.CanonicalService.createLinkForCanonicalURL();
   this.MetaTagService.updateTag(
      {name:'description', content: 'SIMSA es una empresa de lider en construcción ubicada estrtegicamente en Managua, capital de Nicaragua.'}
    );
  }
}
