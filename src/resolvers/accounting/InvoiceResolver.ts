import {
  Resolver,
  Query,
  Mutation,
  Arg,
  UseMiddleware,
  // Ctx,
} from "type-graphql";
import { Invoice, InvoiceModel } from "../../entity/accounting/Invoice";
import { isAuth } from "../../middleware/is_auth_middleware";
// import { MyContext } from "../../context/my_context";
import { InvoiceInput } from "./types/invoice_input";

@Resolver()
export class InvoiceResolver {
  @Query(() => [Invoice!]!)
  // @UseMiddleware(isAuth)
  invoices() {
    return InvoiceModel.find();
  }

  //this is only for testing purposes, invoices should never be deleted
  /*@Mutation(() => Boolean)
   @Authorized
   @UseMiddleware(isAuth)
   async delete_invoice(
    @Ctx() { payload }: MyContext,
     @Arg("invoice_no") invoice_no: number
 ): {}; */

  @Mutation(() => Invoice)
  // @UseMiddleware(isAuth)
  async update_invoice(
    // @Ctx() { payload }: MyContext,
    @Arg("invoice_no") invoice_no: number,
    @Arg("clientId") clientId: string,
    @Arg("update_invoice") update_invoice: InvoiceInput
  ) {
    try {
      const updateInvoice = await InvoiceModel.findOneAndUpdate(
        { invoice_no: invoice_no, clientId: clientId },
        {
          ...update_invoice,
        },
        { new: true }
      );

      console.log(updateInvoice);
      return updateInvoice;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Mutation(() => Invoice)
  @UseMiddleware(isAuth)
  async createInvoice(
    @Arg("invoiceInput") invoiceInput: InvoiceInput
  ): Promise<Invoice> {
    try {
      const invoice = await new InvoiceModel({
        ...invoiceInput,
      });

      return invoice.save();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
