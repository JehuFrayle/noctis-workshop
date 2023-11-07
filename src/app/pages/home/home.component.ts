import { Component, OnInit } from '@angular/core';
import { CoverImage } from 'src/app/models/content';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images:CoverImage[] = [];
  currentService = "Art";
  
  constructor(private content:ContentService) {}
  ngOnInit(): void {
    this.content.getServices().subscribe((data)=>{
      this.images = data.data.map((service)=>{
        return {
          src: this.content.API_ORIGIN_URL + service.attributes.image.data.attributes.url,
          alt: service.attributes.name,
          service: service.attributes.name
        }
      });

      this.currentService = this.images[0].service;
    })
  }


  onNextSlide(index: number) {
    this.currentService = this.images[index].service;
  }
}
