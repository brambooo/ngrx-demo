// import { InvoiceEntity } from '../../../shared/models/state/invoice.models';
// import {
//   invoicesAdapter,
//   InvoicesPartialState,
//   initialInvoicesState,
// } from './invoices.reducer';
// import * as InvoicesSelectors from './invoices.selectors';

// describe('Invoices Selectors', () => {
//   const ERROR_MSG = 'No Error Available';
//   const getInvoicesId = (it: InvoiceEntity) => it.id;
//   const createInvoicesEntity = (id: string, name = '') =>
//     ({
//       id,
//       name: name || `name-${id}`,
//     }) as InvoiceEntity;

//   let state: InvoicesPartialState;

//   beforeEach(() => {
//     state = {
//       invoices: invoicesAdapter.setAll(
//         [
//           createInvoicesEntity('PRODUCT-AAA'),
//           createInvoicesEntity('PRODUCT-BBB'),
//           createInvoicesEntity('PRODUCT-CCC'),
//         ],
//         {
//           ...initialInvoicesState,
//           selectedId: 'PRODUCT-BBB',
//           error: ERROR_MSG,
//           loaded: true,
//         },
//       ),
//     };
//   });

//   describe('Invoices Selectors', () => {
//     it('selectAllInvoices() should return the list of Invoices', () => {
//       const results = InvoicesSelectors.selectAllInvoices(state);
//       const selId = getInvoicesId(results[1]);

//       expect(results.length).toBe(3);
//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it('selectEntity() should return the selected Entity', () => {
//       const result = InvoicesSelectors.selectEntity(state) as InvoiceEntity;
//       const selId = getInvoicesId(result);

//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it('selectInvoicesLoaded() should return the current "loaded" status', () => {
//       const result = InvoicesSelectors.selectInvoicesLoaded(state);

//       expect(result).toBe(true);
//     });

//     it('selectInvoicesError() should return the current "error" state', () => {
//       const result = InvoicesSelectors.selectInvoicesError(state);

//       expect(result).toBe(ERROR_MSG);
//     });
//   });
// });
