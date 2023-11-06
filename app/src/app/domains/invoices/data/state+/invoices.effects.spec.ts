// import { TestBed } from '@angular/core/testing';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { Action } from '@ngrx/store';
// import { provideMockStore } from '@ngrx/store/testing';
// import { hot } from 'jasmine-marbles';
// import { Observable } from 'rxjs';

// import * as InvoicesActions from './invoices.actions';
// import { InvoicesEffects } from './invoices.effects';

// describe('InvoicesEffects', () => {
//   let actions: Observable<Action>;
//   let effects: InvoicesEffects;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [],
//       providers: [
//         InvoicesEffects,
//         provideMockActions(() => actions),
//         provideMockStore(),
//       ],
//     });

//     effects = TestBed.inject(InvoicesEffects);
//   });

//   describe('init$', () => {
//     it('should work', () => {
//       actions = hot('-a-|', { a: InvoicesActions.initInvoices() });

//       const expected = hot('-a-|', {
//         a: InvoicesActions.loadInvoicesSuccess({ invoices: [] }),
//       });

//       expect(effects.init$).toBeObservable(expected);
//     });
//   });
// });
