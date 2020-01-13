import { prop as Property, getModelForClass } from "@typegoose/typegoose";
// import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Credit_Note {
  @Field()
  @Property()
  clientId: string;

  @Field()
  @Property()
  deviceId: string;

  @Field()
  @Property()
  credit_note_no: number;

  @Field()
  @Property()
  invoice_no: number;

  @Field()
  @Property()
  date: string;

  @Field()
  @Property()
  customer: string;

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

export const CreditNoteModel = getModelForClass(Credit_Note);
