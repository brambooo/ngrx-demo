// import { Action } from '@ngrx/store';

// import * as InvoicesActions from './invoices.actions';
// import { InvoiceEntity } from '../../../shared/models/state/invoice.models';
// import {
//   InvoicesState,
//   initialInvoicesState,
//   invoicesReducer,
// } from './invoices.reducer';

// describe('Invoices Reducer', () => {
//   const createInvoicesEntity = (id: string, name = ''): InvoiceEntity => ({
//     id,
//     name: name || `name-${id}`,
//   });

//   describe('valid Invoices actions', () => {
//     it('loadInvoicesSuccess should return the list of known Invoices', () => {
//       const invoices = [
//         createInvoicesEntity('PRODUCT-AAA'),
//         createInvoicesEntity('PRODUCT-zzz'),
//       ];
//       const action = InvoicesActions.loadInvoicesSuccess({ invoices });

//       const result: InvoicesState = invoicesReducer(
//         initialInvoicesState,
//         action,
//       );

//       expect(result.loaded).toBe(true);
//       expect(result.ids.length).toBe(2);
//     });
//   });

//   describe('unknown action', () => {
//     it('should return the previous state', () => {
//       const action = {} as Action;

//       const result = invoicesReducer(initialInvoicesState, action);

//       expect(result).toBe(initialInvoicesState);
//     });
//   });
// });
