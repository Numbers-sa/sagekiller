import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
// import {Notes} from '../types/Notes';
// import {Debit} from '../types/Debit';
// import {Credit} from '../types/Credit';

@ObjectType()
export class Customer {
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

  // // @Field(() => [Notes])
  // @Property()
  // notes: [Notes];

  // @Field({ nullable: true })
  // @Column("float", { default: 0, nullable: true })
  // credit_limit: number;

  // //@Field(() => [Debit], {nullable: true})
  // @Column("float", { default: 0, nullable: true })
  // debit: [Debit];

  // //@Field(() => [Credit], {nullable: true})
  // @Column("float", { default: 0, nullable: true })
  // credit: [Credit];
}

export const CustomerModel = getModelForClass(Customer);
