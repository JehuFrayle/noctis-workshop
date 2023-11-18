import { Component, OnInit } from '@angular/core';
import { CategoryCoverImage } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images:CategoryCoverImage[] = [];
  currentService = "Art";
  
  constructor(private content:CategoriesService) {}
  ngOnInit(): void {
    this.content.getCategories().subscribe((data)=>{
      this.images = data.data.map((service)=>{
        return {
          src: this.content.API_ORIGIN_URL + service.attributes.Images.data[0].attributes.url,
          alt: service.attributes.Images.data[0].attributes.alternativeText,
          name: service.attributes.Name
        }
      });

      this.currentService = this.images[0].name;
    })
  }


  onNextSlide(index: number) {
    this.currentService = this.images[index].name;
  }
}
