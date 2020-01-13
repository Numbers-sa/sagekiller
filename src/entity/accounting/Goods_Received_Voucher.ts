import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Goods_Received_Voucher {
  @Field()
  @Property()
  clientId: string;

  @Field()
  @Property()
  deviceId: string;

  @Field()
  @Property()
  grv_no: number;

  @Field()
  @Property()
  date: string;

  @Field()
  @Property()
  supplier_code: string;

  @Field()
  @Property()
  suppler_name: string;

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

export const GRV = getModelForClass(Goods_Received_Voucher);
