import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabsSiblingRootPage } from './tabs-sibling-root.page';

describe('Tab1Page', () => {
  let component: TabsSiblingRootPage;
  let fixture: ComponentFixture<TabsSiblingRootPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsSiblingRootPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsSiblingRootPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
