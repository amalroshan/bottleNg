import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-purchase',
  templateUrl: './verify-purchase.component.html',
  styleUrls: ['./verify-purchase.component.scss']
})
export class VerifyPurchaseComponent implements OnInit {

  constructor(private appService:AppService, private router:Router) { 
    appService.currentPage.next("verify");
  }

  ngOnInit(): void {
  }
  verify(){
    this.appService.verifyCompleted.next(true);
    this.router.navigate(["experience"]);
  }

}
