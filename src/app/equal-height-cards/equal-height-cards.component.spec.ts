import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgcFormsModule, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, IgxBadgeComponent } from 'igniteui-angular';
import { EqualHeightCardsComponent } from './equal-height-cards.component';

describe('EqualHeightCardsComponent', () => {
  let component: EqualHeightCardsComponent;
  let fixture: ComponentFixture<EqualHeightCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EqualHeightCardsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES, IgcFormsModule, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, IgxBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqualHeightCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
