import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../store/user.actions';
import { selectUserState } from '../../store/user.selectors';
import { user } from '../../models/user.model';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  public userList: user[] = []
  constructor(private store: Store){}
  ngOnInit(): void {
    this.store.dispatch(loadUsers({page: 1, per_page:6}));
    this.store.select(selectUserState).subscribe(response => this.userList = response.data);
  }

}
