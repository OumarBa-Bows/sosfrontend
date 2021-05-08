import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBiomedicaleComponent } from './details-biomedicale.component';

describe('DetailsBiomedicaleComponent', () => {
  let component: DetailsBiomedicaleComponent;
  let fixture: ComponentFixture<DetailsBiomedicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBiomedicaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBiomedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
