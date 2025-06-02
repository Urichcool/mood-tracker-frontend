import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpPage } from './pages/sign-up-page/sign-up-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignUpPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'mood-tracker';
}
