import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GalleryService } from '../gallery.service';
import { GalleryImage } from '../model/gallery-image';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit, OnDestroy {

  public image: GalleryImage;
  private subscription: Subscription;

  constructor(
    private ref: ChangeDetectorRef,
    private readonly galleryService: GalleryService
  ) {
  }

  ngOnInit(): void {
    this.getImageSelected();
  }

  buy(): void {
    console.log(this.image.position);
    var d = confirm("Seguro de comprar: " + this.image.nombre + "\n" + "A solo: " + this.image.precio + "Bs.?");
    if (d) {
      var newpre = this.image.precio * 1.25;
      alert("Su solicitud se esta procesando.\nEl total es de: " + newpre + "Bs. incluyendo impuestos y envio")
    } else {
      console.log("Solicitud no enviada");
    }
  }

  getImageSelected(): void {
    this.subscription = this.galleryService
      .getImageSelected()
      .subscribe((image: GalleryImage) => {
        this.image = image;
        this.ref.detectChanges();
      });
  }

  changeImg(move: number): void {
    const position = this.image.position + move;
    this.galleryService.selectImage(position);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}