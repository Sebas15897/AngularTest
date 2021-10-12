import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemovePost } from '../app/store/post/posts.actions';
import { Posts } from '../app/store/post/posts.model';

@Component({
  selector: 'app-listar-posts',
  templateUrl: './listar-posts.component.html',
  styleUrls: ['./listar-posts.component.css']
})
export class ListarPostsComponent implements OnInit {
  public posts: Observable<Posts>;

  constructor(private store: Store) { 
    this.posts = this.store.select(state => state.posts.posts);
  }

  ngOnInit(): void {
  }

  public removePost (id) {
    this.store.dispatch(new RemovePost(id));
  }

}
