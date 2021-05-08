import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcomportementaleComponent } from './editcomportementale.component';

describe('EditcomportementaleComponent', () => {
  let component: EditcomportementaleComponent;
  let fixture: ComponentFixture<EditcomportementaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcomportementaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcomportementaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
