import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelulaComponent } from './celula.component';

describe('CelulaComponent', () => {
  let component: CelulaComponent;
  let fixture: ComponentFixture<CelulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CelulaComponent]
    });
    fixture = TestBed.createComponent(CelulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
