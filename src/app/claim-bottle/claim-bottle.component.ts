import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-claim-bottle',
  templateUrl: './claim-bottle.component.html',
  styleUrls: ['./claim-bottle.component.scss']
})
export class ClaimBottleComponent implements OnInit {

  constructor(private appService:AppService) { 
    appService.currentPage.next("claim");
  }

  ngOnInit(): void {
  }

}
