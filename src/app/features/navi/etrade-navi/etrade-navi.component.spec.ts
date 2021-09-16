import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtradeNaviComponent } from './etrade-navi.component';

describe('EtradeNaviComponent', () => {
  let component: EtradeNaviComponent;
  let fixture: ComponentFixture<EtradeNaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtradeNaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtradeNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
