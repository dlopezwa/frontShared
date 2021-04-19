import { NgModule } from '@angular/core';
import { SidenavApplicationsComponent } from './components/sidenav-applications/sidenav-applications.component';
import { SharedLibExampleComponent } from './shared-lib-example.component';
import { MaterialModule } from './modules/material.module';
import { ListApplicationsComponent } from './components/list-applications/list-applications.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SharedLibExampleComponent,SidenavApplicationsComponent, ListApplicationsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [SharedLibExampleComponent, SidenavApplicationsComponent]
})
export class SharedLibExampleModule { }
