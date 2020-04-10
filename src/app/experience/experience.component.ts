import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  description;
  satisfiedOne;
  satisfiedTwo;
  experienceOne=[
    "I HATE IT",
    "I DON'T LIKE IT",
    "IT'S OKAY",
    "I LIKE IT",
    "I LOVE IT"
  ];
  experienceTwo=[1,2,3,4,5,6,7,8,9,10];
  constructor(private appService:AppService, private router:Router) {
    appService.currentPage.next("experience");
  }

  ngOnInit(): void {
  }

  submitExperience(){
    if(["I LIKE IT", "I LOVE IT"].includes(this.satisfiedOne)){
      this.copyText(this.description);
      document.getElementById("amzReviewModalBtn").click();
    }
    else{
      this.appService.experienceCompleted.next(true);
      this.router.navigate(["claim"]);
    }
  }

  satisfiedOneClick(exp){
    this.satisfiedOne=exp;
  }
  satisfiedTwoClick(exp){
    this.satisfiedTwo=exp;
  }

  copyText(val: string){
    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    }
}
