import { NgModule } from '@angular/core';
import {SignupComponent} from './signup.component';
import {SignupRoutingModule} from './signup-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {LoginModule} from '../login/login.module';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    SharedModule,
    SignupRoutingModule,
    LoginModule,
  ]
})
export class SignupModule { }
