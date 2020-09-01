import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-distancer',
  templateUrl: './distancer.component.html',
  styleUrls: ['./distancer.component.scss']
})
export class DistancerComponent implements OnInit {

  constructor(public http: HttpService) { }

  ngOnInit(): void {
  }

}
