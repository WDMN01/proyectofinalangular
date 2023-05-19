import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { UserActions } from './user.actions';
import { HttpClient } from '@angular/common/http';
import { Action } from 'rxjs/internal/scheduler/Action';
import { user } from '../models/user.model';

export interface UsersListResponse{
  page: number
  per_page: number
  total: number
  total_pages: number
  data: user[]
  support: Support 

}

export interface Support{
  url: string;
  text: string;
}

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(UserActions.loadUsers),
      concatMap((action) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getUsersFromApi(action.page, action.per_page).pipe(
          map((response) => UserActions.loadUsersSuccess({ data: response.data})),
          catchError(error => of(UserActions.loadUsersFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private httpClient: HttpClient) {}
  private getUsersFromApi(page: number, per_page: number):Observable<UsersListResponse>{
    return this.httpClient.get<UsersListResponse>('https://reqres.in/api/users',{
      params:{
        page,
        per_page,
      }
    });
  }
}
