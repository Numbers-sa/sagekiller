import { Field, ObjectType } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class Account {
  @Field()
  @Property()
  clientId: string;

  @Field()
  @Property()
  deviceId: string;

  @Field()
  @Property()
  code: string;

  @Field()
  @Property()
  name: string;

  @Field()
  @Property()
  account_type: string;

  @Field({ nullable: true })
  debit: number;

  @Field({ nullable: true })
  credit: string;
}

export const AccountModal = getModelForClass(Account);
