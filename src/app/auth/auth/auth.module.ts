import { NgModule, CUSTOM_ELEMENTS_SCHEMA, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Angular } from 'src/app/material-module';
import { MainComponent } from '../components/main/main.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { RouterModule } from '@angular/router';
import { PopComponent } from '../components/pop/pop.component';
import { MatDialogModule } from '@angular/material/dialog';






@NgModule({
  declarations: [ RegisterComponent, LoginComponent, MainComponent, PopComponent ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    MatDividerModule, 
    MatButtonModule, NgIf, 
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    Angular,
    RouterModule,
    MatDialogModule
  ],
  exports:[ RegisterComponent, LoginComponent, MainComponent, PopComponent],
})
export class AuthModule { }
