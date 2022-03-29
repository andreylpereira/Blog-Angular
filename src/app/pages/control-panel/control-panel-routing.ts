import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../../services/auth-guard/auth-guard.service';
/* Components */
import { ControlPanelComponent } from 'src/app/pages/control-panel/control-panel.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { FormCategoriesComponent } from 'src/app/pages/control-panel/categories/form-categories/form-categories.component';
import { FormArticlesComponent } from 'src/app/pages/control-panel/articles/form-articles/form-articles.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'control-panel',
    component: ControlPanelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'control-panel/categories',
    children: [
      {
        path: 'new',
        component: FormCategoriesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id/edit',
        component: FormCategoriesComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'control-panel/articles',
    children: [
      {
        path: 'new',
        component: FormArticlesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id/edit',
        component: FormArticlesComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlPanelRoutingModule {}
