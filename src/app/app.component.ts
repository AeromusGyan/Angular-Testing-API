import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck,
    AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked,
    OnDestroy {
    title = 'Sciaku';
    myMessage = 'This is a custom directive'
    name: string = 'My name is GYan Prakash.'
    imageUrl: string = 'https://cdn.sciaku.com/browser/assets/images/courses/a3a41e47-e559-4868-93d5-f933c84fd0ac.jpg';

    // data = '';
    getData(event: any) {
        this.data = event;
    }

    data = 'Angular';
    ngOnInit() {
        // console.log('Init');
    }
    ngDoCheck(): void {
        // console.log('Change detected');
    }
    ngAfterContentInit(): void {
        // console.log('After content init');
    }
    ngAfterContentChecked(): void {
        // console.log('After content checked');
    }
    ngAfterViewInit(): void {
        // console.log('After view init');
    }
    ngAfterViewChecked(): void {
        // console.log('After view checked');
    }
    ngOnDestroy(): void {
        // console.log('Destroy');
    }
    fetchImage(imageUrl:string){
        try {
            // Use the Fetch API to make a GET request to the image URL.
            // const response = fetch('imageUrl');
        
            // Check if the response status is OK (200).
            // if (response.ok) {
            //   // Convert the response body to a blob, which represents binary data.
            //   const imageBlob = await response.blob();
        
            //   // Create a URL for the blob data, which can be used to display the image.
            //   const imageUrl = URL.createObjectURL(imageBlob);
        
            //   // You can now use the imageUrl to display the image in your application.
            //   console.log('Image URL:', imageUrl);
            // } else {
            //   console.error('Failed to fetch image. Status:', response.status);
            // }
          } catch (error) {
            console.error('Error fetching image:', error);
          }
    }
}
