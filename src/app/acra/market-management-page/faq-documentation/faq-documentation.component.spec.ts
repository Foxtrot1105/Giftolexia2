import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqDocumentationComponent } from './faq-documentation.component';

describe('FaqDocumentationComponent', () => {
  let component: FaqDocumentationComponent;
  let fixture: ComponentFixture<FaqDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FaqDocumentationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
