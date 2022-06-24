import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfuaFooterComponent } from './mfua-footer.component';

describe('MfuaFooterComponent', () => {
  let component: MfuaFooterComponent;
  let fixture: ComponentFixture<MfuaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfuaFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfuaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
