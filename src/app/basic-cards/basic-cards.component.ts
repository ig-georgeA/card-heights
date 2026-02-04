import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxDividerDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-basic-cards',
  imports: [IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxDividerDirective],
  templateUrl: './basic-cards.component.html',
  styleUrls: ['./basic-cards.component.scss']
})
export class BasicCardsComponent {}
