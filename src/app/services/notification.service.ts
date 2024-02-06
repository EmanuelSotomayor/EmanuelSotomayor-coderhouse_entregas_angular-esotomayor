import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationTrigger$ = new Subject<SweetAlertOptions>();
  
  constructor() {
    this.notificationTrigger$.subscribe({
      next: (options) => {
        Swal.fire(options)
      }
    });
  }

  showCustomAlert(options: SweetAlertOptions): void{
    this.notificationTrigger$.next(options);
  }

}