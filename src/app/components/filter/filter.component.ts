import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterActive = false;
  filterToggle() {
    this.filterActive = !this.filterActive;
  }

  filter(category:string){
    console.log(category);
    //todo: filter by category

    this.filterToggle();
  }
}
