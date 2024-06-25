import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterial1Component } from './angular-material1.component';

describe('AngularMaterial1Component', () => {
  let component: AngularMaterial1Component;
  let fixture: ComponentFixture<AngularMaterial1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMaterial1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularMaterial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
