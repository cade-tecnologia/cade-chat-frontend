import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private readonly key: string = 'user';

  public set user(user: string) {
    localStorage.setItem(this.key, user)
  }

  public get user(): string {
    return localStorage.getItem(this.key);
  }
}
