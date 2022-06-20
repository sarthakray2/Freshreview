import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostModel } from '../Post.model';
import { DataService } from '../data.service';
import { CommentsModalComponent } from '../comments-modal/comments-modal.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostModel[] = [];

  constructor(private Data: DataService, public matDialog: MatDialog) { }

  getPosts(): void {
    this.Data.getPosts()
      .subscribe(posts => this.posts = posts)
  }

  ngOnInit(): void {
    this.getPosts();
  }

  openModal(postId: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "Comments-modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";

    dialogConfig.data = {
      num: postId,
  };
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(CommentsModalComponent,  dialogConfig);
  }

}
