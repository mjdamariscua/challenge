import { Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  faLink = faLink;
  content = [];
  contentBase = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.content$().subscribe((response) => {
      this.contentBase = response.entries;
      this.content = this.contentBase;
      console.log(this.content);
    });
  }

  counter(length: number): Array<any> {
    if (Math.trunc(length) >= 0) {
      return new Array(Math.trunc(length));
    }else {
      return new Array();
    }
  }

}
