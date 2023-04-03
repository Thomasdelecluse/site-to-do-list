import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtodoComponent } from './formtodo.component';

describe('TodolistComponent', () => {
  let component: FormtodoComponent;
  let fixture: ComponentFixture<FormtodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
