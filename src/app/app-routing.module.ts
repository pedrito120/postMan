import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostManComponent } from './post-man/post-man.component';


const routes: Routes = [
  {path: "", redirectTo: "postman", pathMatch: "full"},
  {path: "postman", component: PostManComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
