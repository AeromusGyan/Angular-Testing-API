import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { ImageComponent } from './image/image.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { EditorComponent } from './components/editor/editor.component';

const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'image', component:ImageComponent},
  {path:'owl',component:OwlCarouselComponent},
  {path:'form', component:FormsComponent},
  {path:'editor', component:EditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
