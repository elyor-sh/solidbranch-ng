import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SummaryPage, SummaryPageModule} from "./summary";
import {TransactionsPage, TransactionsPageModule} from "./transactions";

const routes: Routes = [
  { path: '', component: SummaryPage },
  { path: 'navigator', component: TransactionsPage },
  //{ path: '**', redirectTo: '' },
];

@NgModule({
  imports: [SummaryPageModule, TransactionsPageModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
