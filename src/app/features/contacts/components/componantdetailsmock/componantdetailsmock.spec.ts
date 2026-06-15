import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componantdetailsmock } from './componantdetailsmock';

describe('Componantdetailsmock', () => {
  let component: Componantdetailsmock;
  let fixture: ComponentFixture<Componantdetailsmock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componantdetailsmock],
    }).compileComponents();

    fixture = TestBed.createComponent(Componantdetailsmock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
