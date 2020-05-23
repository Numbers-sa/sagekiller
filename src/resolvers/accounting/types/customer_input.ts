import { Field, InputType } from "type-graphql";
import { Customer } from "../../../entity/accounting/Customer";

@InputType()
export class CustomerInput implements Partial<Customer> {
  @Field({ nullable: true })
  clientId: string;

  @Field({ nullable: true })
  code: string;

  @Field()
  name: string;
}
