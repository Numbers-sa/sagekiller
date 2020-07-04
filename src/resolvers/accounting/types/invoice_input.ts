import { InputType, Field } from "type-graphql";
import { Invoice } from "../../../entity/accounting/Invoice";

@InputType()
export class InvoiceInput implements Partial<Invoice> {
  @Field({ nullable: true })
  invoice_no: number;

  @Field()
  invoice_date: string;

  @Field()
  customer: string;

  @Field()
  clientId: string;

  @Field()
  deviceId: string;

  @Field()
  vat_amount: number;

  @Field()
  total_excluding: number;

  @Field()
  total_including: number;
}
