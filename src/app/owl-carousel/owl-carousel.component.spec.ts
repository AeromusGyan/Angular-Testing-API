import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlCarouselComponent } from './owl-carousel.component';

describe('OwlCarouselComponent', () => {
  let component: OwlCarouselComponent;
  let fixture: ComponentFixture<OwlCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwlCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
