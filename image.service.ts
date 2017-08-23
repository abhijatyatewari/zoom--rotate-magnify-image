import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { ImageProperties } from './image-model';
import { environment } from 'environments/environment';

@Injectable()
export class ImageService {
  imageProps :ImageProperties = {}
  publishedImageProps :Subject<ImageProperties> =  new BehaviorSubject<ImageProperties>(null);
  docParameters: any;
  private jsonBaseUrl = environment.jsonBaseUrl;
  docimagesUrl:string = this.jsonBaseUrl+'docImages.json';
  
  constructor(
    private http: Http
  ) { }

  updateImageProps(props: ImageProperties){
        this.imageProps = props;
        this.publishImageProps();
  }

   publishImageProps() : void {
       this.publishedImageProps.next(this.imageProps);
  }

  fetchDocimages(): Observable<any> {
    var body = this.docParameters;
    let bodyString = JSON.stringify(body);
    return this.http.get(this.docimagesUrl, body)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
