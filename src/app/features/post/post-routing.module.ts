import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CreateComponent } from './pages/create/create.component';
import { DetailComponent } from './pages/detail/detail.component';
import { EditComponent } from '../mypage/pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { MypostsComponent } from '../mypage/pages/myposts/myposts.component';

const routes: Routes = [
  {
    path: 'post',
    children: [
      { path: 'list', component: ListComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'create', component: CreateComponent },
      {
        path: 'myposts',
        children: [
          { path: '', component: MypostsComponent },
          { path: 'edit/:id', component: EditComponent },
        ],
      },
      { path: '**', redirectTo: '/post/list', pathMatch: 'full' },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
