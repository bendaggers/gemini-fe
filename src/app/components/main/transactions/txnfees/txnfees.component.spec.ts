import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnfeesComponent } from './txnfees.component';

describe('TxnfeesComponent', () => {
  let component: TxnfeesComponent;
  let fixture: ComponentFixture<TxnfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxnfeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxnfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
