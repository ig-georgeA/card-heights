import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { BasicCardsComponent } from './basic-cards/basic-cards.component';
import { EqualHeightCardsComponent } from './equal-height-cards/equal-height-cards.component';

export const routes: Routes = [
  { path: '', redirectTo: 'basic-cards', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'basic-cards', component: BasicCardsComponent, data: { text: 'Basic-Cards' } },
  { path: 'equal-height-cards', component: EqualHeightCardsComponent, data: { text: 'Equal-Height-Cards' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
