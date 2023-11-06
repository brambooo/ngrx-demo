import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddInvoicePageComponent } from './add-invoice-page.component';

describe('AddInvoicePageComponent', () => {
  let component: AddInvoicePageComponent;
  let fixture: ComponentFixture<AddInvoicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInvoicePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddInvoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
