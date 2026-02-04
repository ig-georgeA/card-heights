import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-equal-height-cards',
  imports: [IGX_CARD_DIRECTIVES, IgcFormsModule, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, IgxBadgeComponent, FormsModule],
  templateUrl: './equal-height-cards.component.html',
  styleUrls: ['./equal-height-cards.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EqualHeightCardsComponent {
  public ngModel = 5;
  public ngModel1 = 4;
  public ngModel2 = 5;
  public ngModel3 = 4;
  public ngModel4 = 5;
  public ngModel5 = 3;
  public ngModel6 = 4;
}
