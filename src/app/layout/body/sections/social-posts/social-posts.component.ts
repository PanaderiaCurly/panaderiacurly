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
    this.getPosts();
    console.log("component", this.posts);

  }

  getPosts(){
    this.socialPostsService.getPosts().subscribe((res: any) => {
      this.posts = res
    })
  }

  newTab(url: string){
    window.open(url);
  }
}
