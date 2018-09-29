import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-git-hub-followers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.css']
})
export class GitHubFollowersComponent implements OnInit {
  followers: any[];


  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    
    Observable.combineLatest([
    this.route.paramMap,
    this.route.queryParamMap
    ])
    .subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      //this.service.getAll({id: id, page: page})
      this.service.getAll()
      .subscribe(followers => this.followers = followers.json());
  

    });

  }
}
