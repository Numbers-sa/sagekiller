import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Expense {
  @Field()
  @Property()
  clientId: string;

  @Field()
  @Property()
  deviceId: string;

  @Field()
  @Property()
  date: string;

  @Field()
  @Property()
  reference: string;

  @Field()
  @Property()
  description: string;

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

export const ExpenseModel = getModelForClass(Expense);
