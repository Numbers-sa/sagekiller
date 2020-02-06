import { Field, ObjectType } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class Document_Details {
  @Field()
  @Property()
  document_type: string;

  @Field()
  @Property()
  document_number: number;

  @Field()
  @Property()
  code: string;

  @Field()
  @Property()
  description: string;

  @Field()
  @Property()
  quantity: number;

  @Field()
  @Property()
  price: number;

  @Field()
  @Property()
  total: number;
}

export const InvoiceModel = getModelForClass(Document_Details);
