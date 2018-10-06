import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubHomeComponent } from './git-hub-home.component';

describe('GitHubHomeComponent', () => {
  let component: GitHubHomeComponent;
  let fixture: ComponentFixture<GitHubHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
