import { prop as Property, getModelForClass } from "@typegoose/typegoose";
// import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Supplier {
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
}

export const SupplierModel = getModelForClass(Supplier);
