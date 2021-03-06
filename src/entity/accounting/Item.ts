import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Item {
  @Field()
  @Property()
  item_type: string;

  @Field()
  @Property()
  item_code: string;

  @Field()
  @Property()
  item_description: string;

  @Field()
  @Property()
  cost_price: number;

  @Field()
  @Property()
  quantity: number;

  @Field()
  @Property()
  selling_price: number;

  @Field()
  @Property()
  clientId: string;

  @Field()
  @Property()
  deviceId: string;
}

export const ItemModel = getModelForClass(Item);
