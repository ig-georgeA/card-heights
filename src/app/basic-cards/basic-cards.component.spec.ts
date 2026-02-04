import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxDividerDirective } from 'igniteui-angular';
import { BasicCardsComponent } from './basic-cards.component';

describe('BasicCardsComponent', () => {
  let component: BasicCardsComponent;
  let fixture: ComponentFixture<BasicCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCardsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxDividerDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
