import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialComponent } from './special/special.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import{FormsModule}from'@angular/forms'
import { RouteModule } from './route.module';
import{HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http'
import { ServeService } from './serve.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { FormsCrudComponent } from './forms-crud/forms-crud.component';
@NgModule({
  declarations: [
    AppComponent,
    SpecialComponent,
    EventsComponent,
    LoginComponent,
    RegisterComponent,
    FormsCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouteModule,HttpClientModule
  ],
  providers: [AuthGuard,{provide : HTTP_INTERCEPTORS,
    useClass :TokenInterceptorService,
  multi :true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
