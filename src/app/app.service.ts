import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  currentPage:BehaviorSubject<string>=new BehaviorSubject("verify");
  verifyCompleted:BehaviorSubject<boolean>=new BehaviorSubject(false);
  experienceCompleted:BehaviorSubject<boolean>=new BehaviorSubject(false);
  claimCompleted:BehaviorSubject<boolean>=new BehaviorSubject(false);
  constructor() { }
}
