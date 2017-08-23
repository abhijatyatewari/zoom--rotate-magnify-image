import { constructDependencies } from '@angular/core/src/di/reflective_provider';
export interface ImageInterface {
    thumbnail?: any; //image src for the thumbnail
    image?: any; //image src for the image 
    text?: string; //optional text to show for the image
    isSelected?: boolean;
    [propName: string]: any;
}

export class ImageProperties {
    isMagnifyEnabled?: boolean;
    isZoomEnabled?: boolean;
    isRotateEnabled?: boolean;
    zoomFactor?: number;
    rotationDirection?: number;

    constructor() {
    this.isMagnifyEnabled = false;
    this.isZoomEnabled = false;
    this.isRotateEnabled = false;
    }

}

export class ImageOutput {
    outputType?: string;
    recipientName?: string;
    recipientFaxNumber?: string;
    senderName?: string;
    senderNumber?: string;
    comments?: string;

    constructor() {
    this.outputType = 'pdf';
    this.recipientName = '';
    this.recipientFaxNumber = '';
    this.senderName = '';
    this.senderNumber = '';
    this.comments = '';

    }

}