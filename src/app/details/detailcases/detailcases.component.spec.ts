import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcasesComponent } from './detailcases.component';

describe('DetailcasesComponent', () => {
  let component: DetailcasesComponent;
  let fixture: ComponentFixture<DetailcasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
