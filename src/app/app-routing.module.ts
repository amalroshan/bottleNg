import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimBottleComponent } from './claim-bottle/claim-bottle.component';
import { VerifyPurchaseComponent } from './verify-purchase/verify-purchase.component';
import { ExperienceComponent } from './experience/experience.component';


const routes: Routes = [
  {path:"claim", component:ClaimBottleComponent},
  {path:"verify", component:VerifyPurchaseComponent},
  {path:"experience", component:ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
