import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypageRoutingModule } from './mypage-routing.module';
import { MypostsComponent } from './pages/myposts/myposts.component';
import { EditComponent } from './pages/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MypostsComponent, EditComponent],
  imports: [CommonModule, MypageRoutingModule, ReactiveFormsModule],
})
export class MypageModule {}
