import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingMovieComponent } from './upcomming-movie.component';

describe('UpcommingMovieComponent', () => {
  let component: UpcommingMovieComponent;
  let fixture: ComponentFixture<UpcommingMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcommingMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
