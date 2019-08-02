import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DEFAULT_SIDEBARITEM } from './sidebar.const';
import { ChangeDetectionStrategy } from '@angular/core';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatListModule, RouterTestingModule],
      declarations: [SidebarComponent, SidebarItemComponent],
    })
      .overrideComponent(SidebarComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const sidebarItems = fixture.debugElement.queryAll(
      By.css('[data-testid="sidebar-item"]')
    );
    expect(component).toBeTruthy();
    expect(sidebarItems).toEqual([]);
  });

  // tslint:disable-next-line: max-line-length
  it('should have correct number of items when items passed in as @Input', () => {
    component.items = [
      DEFAULT_SIDEBARITEM,
      DEFAULT_SIDEBARITEM,
      DEFAULT_SIDEBARITEM,
    ];
    fixture.detectChanges();

    const sidebarItems = fixture.debugElement.queryAll(
      By.css('[data-testid="sidebar-item"]')
    );
    expect(sidebarItems.length).toEqual(3);
  });
});
