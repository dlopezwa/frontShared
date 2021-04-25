import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  endPoint!: string;
  
  ngOnInit(): void {
    this.endPoint = environment.APIEndPoint;
  }
  title = 'frontShared';
}
