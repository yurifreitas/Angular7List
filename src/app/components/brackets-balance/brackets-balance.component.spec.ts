import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketsBalanceComponent } from './brackets-balance.component';

describe('BracketsBalanceComponent', () => {
  let component: BracketsBalanceComponent;
  let fixture: ComponentFixture<BracketsBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketsBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
