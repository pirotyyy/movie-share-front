import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './features/auth/auth.module';
import { PostModule } from './features/post/post.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MypageModule } from './features/mypage/mypage.module';
import { PostService } from './services/post.service';
import { UserValidator } from './validators/user.validator';
import { PostValidator } from './validators/post.validator';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PostModule,
    HttpClientModule,
    MypageModule,
  ],
  providers: [AuthService, PostService, UserValidator, PostValidator],
  bootstrap: [AppComponent],
})
export class AppModule {}
