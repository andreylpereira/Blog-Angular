import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { RegisterComponent } from 'src/app/pages/control-panel/register/register.component';
import { CategoryArticlesComponent } from 'src/app/pages/category-articles/category-articles.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'category/:id/articles', component: CategoryArticlesComponent },
  { path: 'admin/login', component: LoginComponent },
  {
    path: 'admin/register',
    component: RegisterComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/control-panel/control-panel.module').then(
        (a) => a.ControlPanelModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
