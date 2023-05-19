import { createFeature, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { user } from '../models/user.model';

export const userFeatureKey = 'user';

export interface State {
  data: user[];
}

export const initialState: State = {
  data: [],
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state, action) => {
    return{
      ...state,
      data: action.data,
    }
  }),
  on(UserActions.loadUsersFailure, (state, action) => state),
);

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer,
});

