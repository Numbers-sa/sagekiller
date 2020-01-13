import { Field, ObjectType } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class Asset {
  @Field()
  @Property()
  clientId: string;

  @Field()
  @Property()
  device: string;

  @Field()
  @Property()
  code: string;

  @Field()
  @Property()
  name: string;

  @Field()
  @Property()
  cost: number;

  @Field()
  @Property()
  date_of_purchase: string;

  @Property({ default: false, nullable: true })
  sold: boolean;
}
