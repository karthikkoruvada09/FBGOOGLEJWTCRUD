import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import { AuthGuard } from './auth.guard';
import { FormsCrudComponent } from './forms-crud/forms-crud.component';

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot([{path:'',redirectTo:'/login',pathMatch:"full"},{path:'crud',canActivate:[AuthGuard],component:FormsCrudComponent},
{path:'login',component:LoginComponent},{path:'register',component:RegisterComponent},
{path:'events',component:EventsComponent},{path:'special',canActivate:[AuthGuard], component:SpecialComponent}])
  ],
  exports:[RouterModule]
})
export class RouteModule { }
