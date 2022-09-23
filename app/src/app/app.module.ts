import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './pages/title/title.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ResultComponent } from './pages/result/result.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileListComponent } from './pages/profile-list/profile-list.component';
import { ExplanationComponent } from './pages/explanation/explanation.component';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './pages/start/start.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { EditQuizComponent } from './pages/edit-quiz/edit-quiz.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QrDialogComponent } from './components/qr-dialog/qr-dialog.component';
import { IconDialogComponent } from './components/icon-dialog/icon-dialog.component';

import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ToolbarComponent,
    LoginComponent,
    SignUpComponent,
    ResultComponent,
    ProfileCardComponent,
    ProfileListComponent,
    ExplanationComponent,
    HomeComponent,
    StartComponent,
    QuizComponent,
    EditProfileComponent,
    EditQuizComponent,
    QuestionListComponent,
    QrDialogComponent,
    IconDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
