import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDialogComponent } from './icon-dialog.component';

describe('IconDialogComponent', () => {
  let component: IconDialogComponent;
  let fixture: ComponentFixture<IconDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
