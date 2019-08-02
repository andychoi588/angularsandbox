import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItemComponent } from './sidebar-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatListModule } from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DEFAULT_SIDEBARITEM } from '../sidebar.const';
import { ChangeDetectionStrategy } from '@angular/core';

describe('SidebarItemComponent', () => {
  let component: SidebarItemComponent;
  let fixture: ComponentFixture<SidebarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatListModule, RouterTestingModule],
      declarations: [SidebarItemComponent],
    })
      .overrideComponent(SidebarItemComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const link = fixture.debugElement.query(
      By.css('[data-testid="sidebarItem-link"]')
    );

    expect(component).toBeTruthy();
    expect(link).toBeTruthy();
    expect((link.nativeElement as HTMLElement).innerText).toEqual(
      DEFAULT_SIDEBARITEM.title
    );
  });

  // tslint:disable-next-line: max-line-length
  it('should have correct route and text for link when item is passed in as @Input', () => {
    component.item = { title: 'Narnia', route: 'world-of-narnia' };
    fixture.detectChanges();

    const link = fixture.debugElement.query(
      By.css('[data-testid="sidebarItem-link"]')
    );
    expect(link).toBeTruthy();
    expect((link.nativeElement as HTMLElement).innerText).toEqual('Narnia');
  });
});
