import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModdleToggleComponent } from './dark-moddle-toggle.component';

describe('DarkModdleToggleComponent', () => {
  let component: DarkModdleToggleComponent;
  let fixture: ComponentFixture<DarkModdleToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkModdleToggleComponent]
    });
    fixture = TestBed.createComponent(DarkModdleToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
