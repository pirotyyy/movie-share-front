import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { EditComponent } from './pages/edit/edit.component';
import { MypostsComponent } from './pages/myposts/myposts.component';

const routes: Routes = [
  {
    path: 'mypage',
    children: [
      { path: '', component: MypostsComponent },
      { path: 'edit/:id', component: EditComponent },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypageRoutingModule {}
