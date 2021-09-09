import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenowebComponent } from './disenoweb.component';

describe('DisenowebComponent', () => {
  let component: DisenowebComponent;
  let fixture: ComponentFixture<DisenowebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenowebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenowebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
