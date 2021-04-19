import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application/application.service';
import { Application } from '../../services/application/application.serviceI';

@Component({
  selector: 'app-list-applications',
  templateUrl: './list-applications.component.html',
  styleUrls: ['./list-applications.component.scss']
})
export class ListApplicationsComponent implements OnInit {

  constructor(private applicationService: ApplicationService) { }

  applications: Application[] = [];

  ngOnInit(): void {
    this.applicationService.getApplications().subscribe(response => {

      this.applications = response._embedded.applications;
      console.log(this.applications);

    });
  }

}
