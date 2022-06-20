export class CommentModel {
    postId: number;
  id: number;
  name: string;
  email: string;
  body: string;

    constructor(id: number, postId: number, email: string, name: string, body: string) {
        this.id = id;
        this.postId = postId;
        this.email = email;
        this.name = name;
        this.body = body;
      }
  }