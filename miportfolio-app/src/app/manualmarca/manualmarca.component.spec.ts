import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualmarcaComponent } from './manualmarca.component';

describe('ManualmarcaComponent', () => {
  let component: ManualmarcaComponent;
  let fixture: ComponentFixture<ManualmarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualmarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualmarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
