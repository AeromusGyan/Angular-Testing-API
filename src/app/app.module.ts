import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ImageComponent } from './image/image.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageDirective } from './message.directive';
import { RepeatDirective } from './repeat.directive';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { EditorComponent } from './components/editor/editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    OwlCarouselComponent,
    MessageDirective,
    RepeatDirective,
    ChildComponent,
    FormsComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
