import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Invoice {
  @Field({ nullable: true })
  @Property({ required: false, nullable: true })
  invoice_no: number;

  @Field()
  @Property()
  invoice_date: string;

  @Field()
  @Property()
  customer: string;

  //  @Field(() => [Details])
  //@Property()
  //descriptions: Details[];

  @Field({ nullable: true })
  @Property({ nullable: true })
  clientId?: string;

  @Field()
  @Property()
  deviceId: string;

  @Field()
  @Property()
  vat_amount: number;

  @Field()
  @Property()
  total_excluding: number;

  @Field()
  @Property()
  total_including: number;
}

export const InvoiceModel = getModelForClass(Invoice);
