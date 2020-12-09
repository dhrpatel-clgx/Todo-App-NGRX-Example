import * as TodoReducer from "./todo.reducer";
import * as ToDoActions from './todo.action';
import ToDo from './todo.model';
import { initializeState } from './todo.state';

describe('TodoReducer', () => {
    describe('unknown action', () => {
        it('should return the default state', () => {
          const intialState = initializeState();
          const action = {
            type: 'Unknown',
          };
          const state = TodoReducer.ToDoReducer(intialState, action);
     
          expect(state).toBe(intialState);
        });
    });


    describe('GetToDoAction', () => {
        it('should return current todos in the state', () => {
          const { intialState } = TodoReducer;
          const action = {
            type: ToDoActions.GetToDoAction.name,
          };
          const state = TodoReducer.ToDoReducer(intialState, action);
     
          expect(state).toBe(intialState);
        });
    });

    describe('SuccessCreateToDoAction', () => {
        it('should return new todos and update the state in an immutable way', () => {
          const intialState = initializeState();
          const newToDos: Array<ToDo> = [
              {
                  Title: "test",
                  IsCompleted: false
              }
          ];
          const action = ToDoActions.SuccessCreateToDoAction( {payload: newToDos} );
          const state = TodoReducer.ToDoReducer(intialState, action);
     
          expect(state).not.toEqual(intialState);
          expect(state.ToDos).toEqual(newToDos);
        });
    });
});