import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/component/to-do.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { reducer, ToDoReducer } from './to-do/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ToDoEffects } from './to-do/todo.effects';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EnsembleAngular } from '@corelogic/ensemble-angular';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
    
    return reducer(state, action);
  };
}

declare var CLUI: any;
export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EnsembleAngular,
    StoreModule.forRoot({ todos: ToDoReducer }, { metaReducers }),
    EffectsModule.forRoot([ToDoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
