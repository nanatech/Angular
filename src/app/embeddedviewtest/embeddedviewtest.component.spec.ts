import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedviewtestComponent } from './embeddedviewtest.component';

describe('EmbeddedviewtestComponent', () => {
  let component: EmbeddedviewtestComponent;
  let fixture: ComponentFixture<EmbeddedviewtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbeddedviewtestComponent]
    });
    fixture = TestBed.createComponent(EmbeddedviewtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
