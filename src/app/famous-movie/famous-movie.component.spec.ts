import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousMovieComponent } from './famous-movie.component';

describe('FamousMovieComponent', () => {
  let component: FamousMovieComponent;
  let fixture: ComponentFixture<FamousMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
