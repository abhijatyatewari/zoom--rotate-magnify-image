import { Component, OnInit, Input, ViewEncapsulation, OnChanges, EventEmitter, Output, Inject, forwardRef, HostListener, ElementRef} from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';    
import {ImageZoom} from 'app/image-viewer/image-zoom/image-zoom.directive';
import { ImageInterface, ImageProperties} from './image-model';
import { AngularDraggableDirective } from 'app/image-viewer/angular-draggable.directive';


@Component({
  selector: 'rss-image-viewer',
  templateUrl: './image-viewer.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./image-viewer.component.scss'],
  animations: [

        trigger('ImageTransform', [
            state('rotate-clockwise01.5', style({
                transform: 'scale(1.5) translate(0px,0px)',
            })),
            state('rotate-clockwise02', style({
                transform: 'scale(2) translate(0px,0px)',
            })),
            state('rotate-clockwise02.5', style({
                transform: 'scale(2.5) translate(0px,0px)',
            })),
            state('rotate-clockwise03', style({
                transform: 'scale(3) translate(0px,0px)',
            })),
            state('rotate-clockwise03.5', style({
                transform: 'scale(3.5) translate(0px,0px)',
            })),
            state('rotate-clockwise04', style({
                transform: 'scale(4) translate(0px,0px)',
            })),
            state('rotate-clockwise10.5', style({
                transform: 'rotate(90deg) scale(0.5)',
            })),
            state('rotate-clockwise11', style({
                transform: 'rotate(90deg) translate(0px,0px)',
            })),
            state("rotate-clockwise11.5", style({
                transform: 'rotate(90deg) scale(1.5) translate(0px,0px)'
            })),
            state("rotate-clockwise12", style({
                transform: 'rotate(90deg) scale(2) translate(0px,0px)'
            })),
            state("rotate-clockwise12.5", style({
                transform: 'rotate(90deg) scale(2.5) translate(0px,0px)'
            })),
            state("rotate-clockwise13", style({
                transform: 'rotate(90deg) scale(3) translate(0px,0px)'
            })),
            state("rotate-clockwise13.5", style({
                transform: 'rotate(90deg) scale(3.5) translate(0px,0px)'
            })),
            state("rotate-clockwise14", style({
                transform: 'rotate(90deg) scale(4) translate(0px,0px)'
            })),
            state('rotate-clockwise20.5', style({
                transform: 'rotate(180deg) scale(0.5)',
            })),
            state('rotate-clockwise21', style({
                transform: 'rotate(180deg) translate(0px,0px)',
            })),
            state("rotate-clockwise21.5", style({
                transform: 'rotate(180deg) scale(1.5) translate(0px,0px)'
            })),
            state("rotate-clockwise22", style({
                transform: 'rotate(180deg) scale(2) translate(0px,0px)'
            })),
            state("rotate-clockwise22.5", style({
                transform: 'rotate(180deg) scale(2.5) translate(0px,0px)'
            })),
            state("rotate-clockwise23", style({
                transform: 'rotate(180deg) scale(3) translate(0px,0px)'
            })),
            state("rotate-clockwise23.5", style({
                transform: 'rotate(180deg) scale(3.5) translate(0px,0px)'
            })),
            state("rotate-clockwise24", style({
                transform: 'rotate(180deg) scale(4) translate(0px,0px)'
            })),
            state('rotate-clockwise30.5', style({
                transform: 'rotate(270deg) scale(0.5)',
            })),
            state('rotate-clockwise31', style({
                transform: 'rotate(270deg) translate(0px,0px)',
            })),
            state("rotate-clockwise31.5", style({
                transform: 'rotate(270deg) scale(1.5) translate(0px,0px)'
            })),
            state("rotate-clockwise32", style({
                transform: 'rotate(270deg) scale(2) translate(0px,0px)'
            })),
            state("rotate-clockwise32.5", style({
                transform: 'rotate(270deg) scale(2.5) translate(0px,0px)'
            })),
            state("rotate-clockwise33", style({
                transform: 'rotate(270deg) scale(3) translate(0px,0px)'
            })),
            state("rotate-clockwise33.5", style({
                transform: 'rotate(270deg) scale(3.5) translate(0px,0px)'
            })),
            state("rotate-clockwise34", style({
                transform: 'rotate(270deg) scale(4) translate(0px,0px)'
            })),
            state('rotate-anti-clockwise10.5', style({
                transform: 'rotate(-90deg) scale(0.5)',
            })),
            state('rotate-anti-clockwise11', style({
                transform: 'rotate(-90deg) translate(0px,0px)',
            })),
            state("rotate-anti-clockwise11.5", style({
                transform: 'rotate(-90deg) scale(1.5) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise12", style({
                transform: 'rotate(-90deg) scale(2) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise12.5", style({
                transform: 'rotate(-90deg) scale(2.5) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise13", style({
                transform: 'rotate(-90deg) scale(3) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise13.5", style({
                transform: 'rotate(-90deg) scale(3.5) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise14", style({
                transform: 'rotate(-90deg) scale(4) translate(0px,0px)'
            })),
            state('rotate-anti-clockwise20.5', style({
                transform: 'rotate(-180deg) scale(0.5)',
            })),
            state('rotate-anti-clockwise21', style({
                transform:  'rotate(-180deg) translate(0px,0px)',
            })),
            state("rotate-anti-clockwise21.5", style({
                transform: 'rotate(-180deg) scale(1.5) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise22", style({
                transform: 'rotate(-180deg) scale(2) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise22.5", style({
                transform: 'rotate(-180deg) scale(2.5) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise23", style({
                transform: 'rotate(-180deg) scale(3) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise23.5", style({
                transform: 'rotate(-180deg) scale(3.5) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise24", style({
                transform: 'rotate(-180deg) scale(4) translate(0px,0px)'
            })),
            state('rotate-anti-clockwise30.5', style({
                transform: 'rotate(-270deg) scale(0.5)',
            })),
            state('rotate-anti-clockwise31', style({
                transform:  'rotate(-270deg) translate(0px,0px)',
            })),
            state("rotate-anti-clockwise31.5", style({
                transform: 'rotate(-270deg) scale(1.5) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise32", style({
                transform: 'rotate(-270deg) scale(2) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise32.5", style({
                transform: 'rotate(-270deg) scale(2.5) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise33", style({
                transform: 'rotate(-270deg) scale(3) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise33.5", style({
                transform: 'rotate(-270deg) scale(3.5) translate(0px,0px)'
            })),
            state("rotate-anti-clockwise34", style({
                transform: 'rotate(-270deg) scale(4) translate(0px,0px)'
            })),
            transition("* => *", animate("100ms ease-out"))
        ])
    ]
})
export class ImageViewerComponent implements OnInit, OnChanges {
  @Input() images: ImageInterface[];
  @Input() imageProps: ImageProperties;
  @Input('asImage') asImage: string = "image";
  @Input('changeTrigger') changeTrigger: string = "change";
  @Input('asThumbnail') asThumbnail: string = "thumbnail";
  @Input('asText') asText: string = "text";
  @Input('actionText') actionText: string = "";
  @Output('onAction') actionEmitter: EventEmitter<any> = new EventEmitter();
  isMagnifyEnabled: boolean;
  isZoomEnabled?: boolean;
  isRotateEnabled?: boolean;
  zoomFactor: string = '1';
  imageState:string = '';
  rotationDirection: number;
  loading: boolean = false;
  isAllSelected: boolean = false;
  curImageIndex: number = 0;
  curThumbnailIndex: number = 0;
  rotationCount: number = 0;
  rotationClass: string = 'rotate-clockwise0';
  isLightboxOpen: boolean = false;
  isImageDraggable: boolean = false;
  transformX: number = 0;
  transformY: number = 0;
  boundX: number = 0;
  boundY: number = 0;

  constructor() { }

  ngOnInit() {


  }

  ngOnChanges(changes) {
    if (changes.images) {
      this.images = changes.images.currentValue;
    }
    this.changeImageProps();
  }

  public openLightboxGallery(index: number): void {
    this.isLightboxOpen = true;
    setTimeout(() => {
      this.curImageIndex = index - 1;
      this.nextImage();
      this.loading = false;
    }, 0);
  }
  public closeLightboxGallery(): void {
    this.isLightboxOpen = false;
  }
  public nextImage(): void {
    if (this.curImageIndex !== this.images.length - 1) {
      this.loading = true;
      this.curImageIndex++;
      this.curThumbnailIndex = this.curImageIndex;
    }
    this.zoomFactor = '1';
  }
  public previousImage(): void {
    this.loading = true;
    if (this.curImageIndex !== 0) {
      this.curImageIndex--;
    }
    this.curThumbnailIndex = this.curImageIndex;
    this.zoomFactor = '1';
  }
  public toImage(index: number): void {
    this.loading = true;
    this.curImageIndex = index;
    this.curThumbnailIndex = this.curImageIndex;
  }
  public imageChecked(index: number): void {
    this.images[index].isSelected = !this.images[index].isSelected;
    let selectedImages: Array<ImageInterface> =  this.images.filter(image => image.isSelected);
    this.isAllSelected = (selectedImages.length == this.images.length) ? true : false;
  }
  public selectAll(): void {
      this.isAllSelected = !this.isAllSelected;
    this.images.map(image => {
        image.isSelected = this.isAllSelected;
    });
  }
  public thumbnailsNext(): void {
    if (this.curThumbnailIndex + 5 < this.images.length) {
      this.curThumbnailIndex += 5;
    }
    else {
      this.curThumbnailIndex = this.images.length - 1;
    }
    this.curThumbnailIndex += 5;
    this.zoomFactor = '1';
  }
  public thumbnailsPrevious(): void {
    if (this.curThumbnailIndex - 5 > 0) {
      this.curThumbnailIndex -= 5;
    }
    else {
      this.curThumbnailIndex = 0;
    }
    this.zoomFactor = '1';
  }
  public onLoad(el): void {
    this.loading = false;
  }
  public onAction(image: any): void {
    this.actionEmitter.emit({
      image: image
    });
  }
  public onDragBegin(el): void {
      console.log("Drag Begun");
  }

  public onDragEnd(el): void {
       console.log("Drag Ended");
  }

  public changeImageProps(): void {
    if(this.imageProps) {
    
            this.isMagnifyEnabled = this.imageProps.isMagnifyEnabled;
      if(this.imageProps.isMagnifyEnabled) { 
            this.zoomFactor = '1';
      }
      if (this.imageProps.isRotateEnabled) {
              this.rotationCount = this.rotationCount + this.imageProps.rotationDirection;
              this.rotationCount = this.rotationCount % 4;
              let rotDir:string = this.rotationCount < 0 ? '-anti' :'';
              let rotCount: number = Math.abs(this.rotationCount);
              this.rotationClass = 'rotate'+ rotDir +'-clockwise'+rotCount;
              this.imageState = this.rotationClass + this.zoomFactor;
      }
      if (this.imageProps.isZoomEnabled) {
              this.zoomFactor = this.imageProps.zoomFactor? this.imageProps.zoomFactor.toString() : '1';
              this.isImageDraggable = (this.imageProps.zoomFactor > 1)? true : false;   // imageProps is set in doc details as number value
             
      }
               this.imageState = this.rotationClass + this.zoomFactor;
    }
  }

}

