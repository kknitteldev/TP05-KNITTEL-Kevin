import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddPanierComponent } from './btn-add-panier.component';

describe('BtnAddPanierComponent', () => {
  let component: BtnAddPanierComponent;
  let fixture: ComponentFixture<BtnAddPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAddPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAddPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
