import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  apiData!: any;

  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.apiService.getData().subscribe((res: any) => {
      this.apiData = res.data
      console.log(this.apiData);
    });
  }

}
