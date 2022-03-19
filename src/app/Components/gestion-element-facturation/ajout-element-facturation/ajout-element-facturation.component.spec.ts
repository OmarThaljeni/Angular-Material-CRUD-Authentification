import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutElementFacturationComponent } from './ajout-element-facturation.component';

describe('AjoutElementFacturationComponent', () => {
  let component: AjoutElementFacturationComponent;
  let fixture: ComponentFixture<AjoutElementFacturationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutElementFacturationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutElementFacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
