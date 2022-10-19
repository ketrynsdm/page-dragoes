import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ListDragonsComponent } from './page/list-dragons/list-dragons.component';
import { DragonsDetailsComponent } from './page/dragons-details/dragons-details.component';
import { RegistrationDragonsComponent } from './page/registration-dragons/registration-dragons.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeDataComponent } from './page/change-data/change-data.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomePageComponent,
    ListDragonsComponent,
    DragonsDetailsComponent,
    RegistrationDragonsComponent,
    ChangeDataComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    HomePageComponent,
    ListDragonsComponent,
    DragonsDetailsComponent,
    RegistrationDragonsComponent,
    ChangeDataComponent,
  ],
})
export class SharedModule {}
