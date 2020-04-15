import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimBottleComponent } from './claim-bottle/claim-bottle.component';
import { VerifyPurchaseComponent } from './verify-purchase/verify-purchase.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormsModule }   from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaimBottleComponent,
    VerifyPurchaseComponent,
    ExperienceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
