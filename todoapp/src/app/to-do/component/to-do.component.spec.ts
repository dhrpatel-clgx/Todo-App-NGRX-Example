import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import ToDo from '../todo.model';
import ToDoState, { initializeState } from '../todo.state';
import { ToDoComponent } from './to-do.component';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let store: MockStore;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(() => {
    const initialState: ToDoState = { ToDos: [{Title: "test", IsCompleted: false}], ToDoError: null};
    TestBed.configureTestingModule({
      declarations: [ ToDoComponent ],
      providers: [ provideMockStore( {initialState: initialState})]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector("todos", initializeState);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
