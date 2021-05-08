import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComportementaleComponent } from './details-comportementale.component';

describe('DetailsComportementaleComponent', () => {
  let component: DetailsComportementaleComponent;
  let fixture: ComponentFixture<DetailsComportementaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComportementaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComportementaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
