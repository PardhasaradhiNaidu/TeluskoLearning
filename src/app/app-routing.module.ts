import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './home/main-content/main-content.component';


const appRoutes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'home', component: HomeComponent,
        children: [
         
          { path: '', component: MainContentComponent },
        ]
      },


      { path: "", component: LoginComponent }

    ],

  },

  { path: 'login', component: LoginComponent },
  {path:'main/:id',component:MainContentComponent},

  { path: '**', redirectTo: '/login' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: false
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
