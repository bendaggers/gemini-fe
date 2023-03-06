import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxndateComponent } from './txndate.component';

describe('TxndateComponent', () => {
  let component: TxndateComponent;
  let fixture: ComponentFixture<TxndateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxndateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxndateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
