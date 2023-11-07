import { Component, Input, OnInit, Inject, PLATFORM_ID, Output, EventEmitter } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { isPlatformBrowser } from '@angular/common';

interface CarouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: CarouselImage[] = [];
  @Input() animate = true;
  @Input() interval = 5000;
  @Input() showControls = true;
  @Input() showIndicators = true;

  @Output() nextSlide = new EventEmitter<number>();

  selectedImageIndex = 0;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(@Inject(PLATFORM_ID) private platformID: object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID) && this.animate) {
      setInterval(() => {
        this.next();
      }, this.interval);
    }
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }
  prev() {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
    } else {
      this.selectedImageIndex = this.images.length - 1;
    }

    this.nextSlide.emit(this.selectedImageIndex);
  }

  next() {
    if (this.selectedImageIndex < this.images.length - 1) {
      this.selectedImageIndex++;
    } else {
      this.selectedImageIndex = 0;
    }
    this.nextSlide.emit(this.selectedImageIndex);
  }
}
