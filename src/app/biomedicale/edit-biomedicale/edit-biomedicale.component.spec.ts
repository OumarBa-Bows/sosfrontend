import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBiomedicaleComponent } from './edit-biomedicale.component';

describe('EditBiomedicaleComponent', () => {
  let component: EditBiomedicaleComponent;
  let fixture: ComponentFixture<EditBiomedicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBiomedicaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBiomedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
