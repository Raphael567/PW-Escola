import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from "./core/side-nav/side-nav.component";
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SideNavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Escola';
}
