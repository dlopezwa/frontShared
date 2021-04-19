import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavApplicationsComponent } from './sidenav-applications.component';

describe('SidenavApplicationsComponent', () => {
  let component: SidenavApplicationsComponent;
  let fixture: ComponentFixture<SidenavApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
