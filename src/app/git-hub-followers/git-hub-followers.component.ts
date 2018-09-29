import { GithubFollowersService } from '../services/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-hub-followers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.css']
})
export class GitHubFollowersComponent implements OnInit {
  followers: any[];


  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers.json());
  }

}
