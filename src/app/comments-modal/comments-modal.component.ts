import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { CommentModel } from '../Comment.model';

import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: ['./comments-modal.component.css']
})
export class CommentsModalComponent implements OnInit {
  comments: CommentModel[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {num: number}, public dialogRef: MatDialogRef<CommentsModalComponent>, private Data: DataService) { }

  getComments(): void {
    this.Data.getComments(this.data.num)
      .subscribe(comments => this.comments = comments)
  }

  ngOnInit(): void {
    this.getComments();
  }

}
