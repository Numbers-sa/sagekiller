import { Query, Mutation, Resolver, Arg } from "type-graphql";
import { Customer, CustomerModel } from "../../entity/accounting/Customer";
import { CustomerInput } from "./types/customer_input";

@Resolver()
export class CustomerResovler {
  @Query(() => [Customer!]!)
  async customers(@Arg("clientId") clientId: string) {
    return await CustomerModel.find({ clientId });
  }

  @Mutation(() => Customer)
  async createCustomer(@Arg("customer_input") customer_input: CustomerInput) {
    const new_customer = await new CustomerModel({
      ...customer_input,
    });

    console.log(new_customer);
    return new_customer.save();
  }

  @Mutation(() => Boolean)
  async update_customer(
    @Arg("code") code: string,
    @Arg("clientId") clientId: string,
    @Arg("update_customer") customer_input: CustomerInput
  ) {
    const updateCustomer = await CustomerModel.findOneAndUpdate(
      {
        code,
        clientId,
      },
      {
        ...customer_input,
      },
      {
        new: true,
      }
    );

    console.log(updateCustomer);
  }
}
