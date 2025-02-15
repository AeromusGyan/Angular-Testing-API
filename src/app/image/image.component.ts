import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageapiService } from '../services/imageapi.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  selectedFiles: any =  FileList;
  currentFile: any =  File;
  progress = 0;
  message = '';
  URL: string = `http://localhost:8080/file/files/Java.png`;
  image!: Blob;
  imageURL!: SafeUrl;
  fileInfos: any = Observable<any>;

  constructor(private uploadService: ImageapiService, private h:HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
    this.loadImage().subscribe(i=>
    {
      this.image = i
      this.imageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.image))
    })
  }

  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }
  
  upload() {
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      (event:any) => {
        console.log(event, event.loaded, event.total, event.type, this.progress);
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } 
        else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }

  loadImage():Observable<Blob> {
  return this.h.get(this.URL, {
  responseType: "blob"
  });
  }

}
