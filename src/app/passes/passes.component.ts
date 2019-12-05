import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-passes',
  templateUrl: './passes.component.html',
  styleUrls: ['./passes.component.css']
})
export class PassesComponent implements OnInit {
  responseJson: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  passes() {
    this.api.passes().subscribe(
        res => this.responseJson = res
    );
  }

}
