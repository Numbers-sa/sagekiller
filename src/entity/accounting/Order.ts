import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Order {
  @Field()
  @Property()
  clientId: string;

  @Field()
  @Property()
  deviceId: string;

  @Field()
  @Property()
  order_no: number;

  @Field()
  @Property()
  date: string;

  @Field(() => [String])
  @Property()
  deliver_address: [string];

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

export const OrderModel = getModelForClass(Order);
