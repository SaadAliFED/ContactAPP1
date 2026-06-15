import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componantlistmock } from './componantlistmock';

describe('Componantlistmock', () => {
  let component: Componantlistmock;
  let fixture: ComponentFixture<Componantlistmock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componantlistmock],
    }).compileComponents();

    fixture = TestBed.createComponent(Componantlistmock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
