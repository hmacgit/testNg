import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCodeListComponent } from './short-code-list.component';

describe('ShortCodeListComponent', () => {
  let component: ShortCodeListComponent;
  let fixture: ComponentFixture<ShortCodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortCodeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
