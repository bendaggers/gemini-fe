import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharepriceComponent } from './shareprice.component';

describe('SharepriceComponent', () => {
  let component: SharepriceComponent;
  let fixture: ComponentFixture<SharepriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharepriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
