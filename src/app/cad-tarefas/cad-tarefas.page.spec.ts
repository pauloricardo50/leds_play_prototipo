import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadTarefasPage } from './cad-tarefas.page';

describe('CadTarefasPage', () => {
  let component: CadTarefasPage;
  let fixture: ComponentFixture<CadTarefasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadTarefasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadTarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
