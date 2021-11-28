import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  @Output('triggerChange') triggerChange = new EventEmitter();

  private readonly images = ['Cat.jpg', 'Yao.jpg', 'Harry.jpg', 'Jacky.jpg'];
  currentImagePath = '';

  constructor() {}

  ngOnInit(): void {
    this.randomImage();
  }

  randomImage() {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.currentImagePath = `assets/${this.images[randomIndex]}`;
  }

  regenerate() {
    this.randomImage();
    this.triggerChange.emit();
  }
}
