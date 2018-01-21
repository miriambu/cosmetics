import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommComponent } from './recomm.component';

describe('RecommComponent', () => {
  let component: RecommComponent;
  let fixture: ComponentFixture<RecommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
