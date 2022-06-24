import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfuaHeaderComponent } from './mfua-header.component';

describe('MfuaHeaderComponent', () => {
  let component: MfuaHeaderComponent;
  let fixture: ComponentFixture<MfuaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfuaHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfuaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
