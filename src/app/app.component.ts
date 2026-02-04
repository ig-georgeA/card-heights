import { Component } from '@angular/core';
import { IsActiveMatchOptions, Router, RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public router: Router,
  ) {}


  public isActive(path: string): boolean {
    const exactMatch: IsActiveMatchOptions = {
        paths: 'exact',
        matrixParams: 'ignored',
        queryParams: 'ignored',
        fragment: 'ignored'
    }
    return this.router.isActive(path, exactMatch);
  }
}
