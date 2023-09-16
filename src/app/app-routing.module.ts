import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OpenComponent } from './open/open.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { MainComponent } from './auth/components/main/main.component';


const routes: Routes =[
  { path: '' , component:OpenComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'register', component:RegisterComponent},
  { path: 'update/:id', component:RegisterComponent},
  { path: 'main' , component: MainComponent },
]
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" }) ],
  exports: [RouterModule],
})
export class AppRoutingModule {
 };
