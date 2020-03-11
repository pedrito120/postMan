import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostManComponent } from './post-man.component';

describe('PostManComponent', () => {
  let component: PostManComponent;
  let fixture: ComponentFixture<PostManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
