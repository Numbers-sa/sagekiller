import { prop as Property, getModelForClass } from "@typegoose/typegoose";
// import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Return_To_Supplier {
  @Field()
  @Property()
  clientId: string;

  @Field()
  @Property()
  deviceId: string;

  @Field()
  @Property()
  rts_no: number;

  @Field()
  @Property()
  date: string;

  @Field()
  @Property()
  supplier_code: string;

  @Field()
  @Property()
  supplier_name: string;

  @Field()
  @Property()
  credit_note_reference: string;

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

export const RTS_Model = getModelForClass(Return_To_Supplier);
