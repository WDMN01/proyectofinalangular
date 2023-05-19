import { createAction, props } from '@ngrx/store';
import { user } from '../models/user.model';

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ page: number; per_page: number }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: user[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const UserActions = {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
};