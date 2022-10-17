import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDataComponent } from './shared/page/change-data/change-data.component';
import { DragonsDetailsComponent } from './shared/page/dragons-details/dragons-details.component';
import { HomePageComponent } from './shared/page/home-page/home-page.component';
import { ListDragonsComponent } from './shared/page/list-dragons/list-dragons.component';
import { LoginComponent } from './shared/page/login/login.component';
import { RegistrationDragonsComponent } from './shared/page/registration-dragons/registration-dragons.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dragons-details',
    component: DragonsDetailsComponent,
  },
  {
    path: 'list-dragons',
    component: ListDragonsComponent,
  },
  {
    path: 'registration-dragons',
    component: RegistrationDragonsComponent,
  },
  {
    path: 'change-data',
    component: ChangeDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
