import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyAndResources } from './energy-and-resources';

describe('EnergyAndResources', () => {
  let component: EnergyAndResources;
  let fixture: ComponentFixture<EnergyAndResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyAndResources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyAndResources);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
