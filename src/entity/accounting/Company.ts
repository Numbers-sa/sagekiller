import { prop as Property, getModelForClass } from "@typegoose/typegoose";
// import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Company {
  @Field()
  @Property()
  clientId: string;

  @Field()
  @Property()
  deviceId: string;

  @Field()
  @Property()
  companyId: string;

  @Field()
  @Property()
  name: string;

  @Field()
  @Property()
  reg_number: string;

  @Field()
  @Property()
  vat_number: string;

  @Field()
  @Property()
  charge_vat: string;
}

export const CompanySchema = getModelForClass(Company);
