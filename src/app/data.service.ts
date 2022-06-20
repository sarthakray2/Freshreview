import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PostModel } from './Post.model';
import { CommentModel } from './Comment.model';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private postsUrl: string ='https://jsonplaceholder.typicode.com/posts';
  private commentsUrl: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http:HttpClient) { }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.postsUrl}?_sort=views&_order=desc`)
  }

  getComments(userId: number): Observable<CommentModel[]>{
    return this.http.get<CommentModel[]>(`${this.postsUrl}/${userId}/comments`)
  }

}
