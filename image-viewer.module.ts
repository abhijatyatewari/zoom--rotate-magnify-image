import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ImageZoom} from './image-zoom/image-zoom.directive';
import {ImageZoomContainer} from './image-zoom/image-zoom-container.component';
import {ImageZoomLens} from './image-zoom/image-zoom-lens.component';
import { AngularDraggableDirective } from 'app/image-viewer/angular-draggable.directive';


import { ImageViewerComponent } from './image-viewer.component';
import { ImageOutputComponent } from './image-output/image-output.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ImageViewerComponent,ImageZoom,ImageZoomContainer,ImageZoomLens,AngularDraggableDirective],
  exports:      [ImageViewerComponent],
  entryComponents: [ ImageViewerComponent,ImageZoomContainer,ImageZoomLens ]
})
export class ImageViewerModule { }
