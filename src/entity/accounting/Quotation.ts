import { prop as Property, getModelForClass, Ref } from "@typegoose/typegoose";
// import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Quotation {
  @Field()
  @Property()
  quotation_no: number;

  @Field()
  @Property()
  quotation_date: string;

  @Field()
  @Property()
  customer: string;

  @Field(() => User)
  @Property({ ref: User, required: true })
  clientId: Ref<User>;

  @Field()
  @Property()
  deviceId: string;

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

export const QuotationModel = getModelForClass(Quotation);
