import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';
import {faArrowUp, faArrowDown, faComments} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {
  // posts$: Array<PostModel>;


  faComments = faComments;
  @Input() posts: PostModel[]

  constructor(private router: Router) {
    // this.postService.getAllPosts().subscribe(post => {
    //   this.posts$ = post;
    // });
   }


  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/'+id);
  }

}
