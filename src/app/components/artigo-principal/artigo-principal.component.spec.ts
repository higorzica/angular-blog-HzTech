import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoPrincipalComponent } from './artigo-principal.component';

describe('ArtigoPrincipalComponent', () => {
  let component: ArtigoPrincipalComponent;
  let fixture: ComponentFixture<ArtigoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
