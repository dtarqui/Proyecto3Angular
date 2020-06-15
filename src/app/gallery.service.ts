import { Injectable } from '@angular/core';
import { GalleryImage } from './model/gallery-image';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private galleryImages: GalleryImage[] = [];
  private gallery$: BehaviorSubject<GalleryImage[]> = new BehaviorSubject(this.galleryImages);
  private gallerySelected$: BehaviorSubject<GalleryImage> = new BehaviorSubject(undefined);

  private pre: number[] = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  private nom: string[] = ["Visor de Realidad Virtual", "Apple iPad ", "Pebble Smart Watch", " Ring ", "Amazon Echo", "Nintendo Switch", "Doggie", "Play Station 5", "Play Station 4", "XBox One"];

  constructor() {
  }

  getGallery(): Observable<GalleryImage[]> {
    return this.gallery$.asObservable();
  }

  getImageSelected(): Observable<GalleryImage> {
    return this.gallerySelected$.asObservable();
  }

  createGallery(): void {
    this.galleryImages = [];
    for (let i = 0; i < 10; i++) {
      this.galleryImages.push(
        {
          src: `assets/images/image_${i}.jpg`,
          position: i,
          alt: `Image ${i}`,
          first: (i === 0),
          last: (i === 9),
          precio: this.pre[i],
          nombre: this.nom[i]
        });
    }
    this.gallery$.next(this.galleryImages);
  }

  selectImage(position: number): void {
    if (position >= 0 && position < this.galleryImages.length) {
      this.gallerySelected$.next(this.galleryImages[position]);
    }
  }
}