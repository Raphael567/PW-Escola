import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SideNavComponent } from "./core/side-nav/side-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(public router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/'; 
  }
}
