import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bottleNg';
  currentPage;
  IsVerifyCompleted=false;
  IsExperienceCompleted=false;
  IsClaimCompleted=false;

  constructor(private router: Router, private appService:AppService){
    router.navigate(["verify"]);
    appService.currentPage.subscribe(page=>{this.currentPage=page;});
    appService.verifyCompleted.subscribe(c=>{this.IsVerifyCompleted=c;});
    appService.experienceCompleted.subscribe(c=>{this.IsExperienceCompleted=c;});
    appService.claimCompleted.subscribe(c=>{this.IsClaimCompleted=c;});
  }
}
