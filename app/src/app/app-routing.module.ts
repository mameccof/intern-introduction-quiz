import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileListComponent } from './pages/profile-list/profile-list.component';
import { ResultComponent } from './pages/result/result.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TitleComponent } from './pages/title/title.component';
import { ExplanationComponent } from './pages/explanation/explanation.component';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './pages/start/start.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { EditQuizComponent } from './pages/edit-quiz/edit-quiz.component';

const routes: Routes = [
  { path: '', component: TitleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'result', component: ResultComponent },
  { path: 'profile-list', component: ProfileListComponent },
  { path: 'explanation/:id', component: ExplanationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'start', component: StartComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'edit-quiz/:id', component: EditQuizComponent },
  { path: 'edit-quiz', component: EditQuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
