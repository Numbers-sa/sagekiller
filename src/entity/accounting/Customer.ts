import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType("Customers")
export class Customer {
  @Field()
  @Property()
  clientId: string;

  @Property()
  code: string;

  @Field()
  @Property()
  name: string;
}

export const CustomerModel = getModelForClass(Customer);
