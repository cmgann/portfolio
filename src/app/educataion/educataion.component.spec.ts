import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducataionComponent } from './educataion.component';

describe('EducataionComponent', () => {
  let component: EducataionComponent;
  let fixture: ComponentFixture<EducataionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducataionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducataionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
