import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoSecundarioComponent } from './artigo-secundario.component';

describe('ArtigoSecundarioComponent', () => {
  let component: ArtigoSecundarioComponent;
  let fixture: ComponentFixture<ArtigoSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoSecundarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigoSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
