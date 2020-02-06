import { InputType, Field } from "type-graphql";
import { Quotation } from "../../../entity/accounting/Quotation";

@InputType()
export class QuotationInput implements Partial<Quotation> {
  @Field()
  quotation_no: number;

  @Field()
  quotation_date: string;

  @Field()
  customer: string;

  @Field()
  deviceId: string;

  @Field()
  vat_amount: number;

  @Field()
  total_excluding: number;

  @Field()
  total_including: number;
}
