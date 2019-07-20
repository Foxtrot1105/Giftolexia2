import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceCentreComponent } from './resource-centre.component';

describe('ResourceCentreComponent', () => {
  let component: ResourceCentreComponent;
  let fixture: ComponentFixture<ResourceCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
