import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingTrigger$ = new Subject<boolean>();
  public isLoading$ = this.loadingTrigger$.asObservable();

  setLoadingStatus(status: boolean): void{
    this.loadingTrigger$.next(status);
  }

}
