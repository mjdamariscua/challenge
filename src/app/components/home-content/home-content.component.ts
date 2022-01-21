import { Component, OnInit, OnDestroy } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../api.service';
import { isNullOrUndefined } from 'util';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit, OnDestroy {
  faLink = faLink;
  content = [];
  contentBase = [];
  loading;

  paramsSuscriptor: Subscription;


  constructor(private api: ApiService, private routeActive: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSuscriptor = this.routeActive.params.subscribe(params => {
      this.loading = true;
      this.api.content$().subscribe((response) => {
        this.contentBase = response.entries;
        this.content = this.contentBase;
        if (!isNullOrUndefined(params.filter)) {
          this.execute_filter(params.filter);
        } else {
          this.loading = false;
        }
      });
    });
  }

  execute_filter(val) {
    this.content = this.contentBase.filter(function (x) {
      let filter = false;
      for (const clave in x) {
        if (clave) {
          const value = x[clave];
          if (!filter) {
            filter = String(value).toLowerCase().indexOf(val) !== -1 || !val;
          }
        }
      }
      return filter;
    });
    this.loading = false;
  }

  ngOnDestroy() {
    if (!isNullOrUndefined(this.paramsSuscriptor)) {
      this.paramsSuscriptor.unsubscribe();
    }
  }

  counter(length: number): Array<any> {
    if (Math.trunc(length) >= 0) {
      return new Array(Math.trunc(length));
    }else {
      return new Array();
    }
  }

}
