import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenograficoComponent } from './disenografico.component';

describe('DisenograficoComponent', () => {
  let component: DisenograficoComponent;
  let fixture: ComponentFixture<DisenograficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenograficoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenograficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
