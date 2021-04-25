import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-applications',
  templateUrl: './sidenav-applications.component.html',
  styleUrls: ['./sidenav-applications.component.scss']
})
export class SidenavApplicationsComponent implements OnInit {

  @Input() endPoint!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
