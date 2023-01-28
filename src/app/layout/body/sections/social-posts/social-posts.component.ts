import { Component, OnInit } from '@angular/core';
import { SocialPostsService } from './social-posts.service';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styles: [
  ]
})
export class SocialPostsComponent implements OnInit {

  posts: any[] = []

  constructor(
    private socialPostsService: SocialPostsService
  ) { }

  ngOnInit(): void {
    this.lastPosts();
    console.log(this.posts);

  }

  lastPosts(){
    this.socialPostsService.lastPosts().subscribe((res: any) => {
      this.posts = res
    })
  }

  get dataMedia() {
    return this.socialPostsService.dataMedia
  }
}
