import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageapiService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    // formData.append(this.baseUrl)
    console.log(formData);
    const req = new HttpRequest('POST', `${this.baseUrl}/file/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    
    // console.log(req)

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/file/files`);
  }

}
