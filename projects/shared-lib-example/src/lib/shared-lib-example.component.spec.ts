import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLibExampleComponent } from './shared-lib-example.component';

describe('SharedLibExampleComponent', () => {
  let component: SharedLibExampleComponent;
  let fixture: ComponentFixture<SharedLibExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLibExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedLibExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
