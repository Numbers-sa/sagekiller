import {
  Resolver,
  Query,
  Mutation,
  Arg,
  UseMiddleware,
  Ctx,
} from "type-graphql";
import { Invoice, InvoiceModel } from "../../entity/accounting/Invoice";
import { isAuth } from "../../middleware/is_auth_middleware";
import { MyContext } from "../../context/my_context";
import { InvoiceInput } from "./types/invoice_input";

@Resolver()
export class InvoiceResolver {
  @Query(() => [Invoice!]!)
  @UseMiddleware(isAuth)
  invoices(@Ctx() { payload }: MyContext) {
    return InvoiceModel.find({ clientId: payload!.userId });
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
  @UseMiddleware(isAuth)
  async update_invoice(
    @Ctx() { payload }: MyContext,
    @Arg("invoice_no") invoice_no: number,
    @Arg("invoice_date") invoice_date: string,
    @Arg("customer") customer: string,
    @Arg("vat_amount") vat_amount: number,
    @Arg("total_excluding") total_excluding: number,
    @Arg("total_including") total_including: number

    // @Arg("update_invoice") update_invoice: InvoiceInput
  ): Promise<Invoice> {
    try {
      const updateInvoice = await InvoiceModel.findOneAndUpdate(
        { invoice_no: invoice_no, userId: payload?.userId },
        {
          invoice_date,
          customer,
          vat_amount,
          total_excluding,
          total_including,
        },
        { new: true }
      );

      console.log(updateInvoice);
    } catch (error) {
      console.log(error);
      throw error;
    }

    return new Invoice();
  }

  @Mutation(() => Invoice)
  @UseMiddleware(isAuth)
  async createInvoice(
    @Ctx() { payload }: MyContext,
    // @Arg("clientId") clientId: string,

    @Arg("invoiceInput") invoiceInput: InvoiceInput
  ): Promise<Invoice> {
    try {
      const invoice = await new InvoiceModel({
        ...invoiceInput,
        clientId: payload?.userId,
      });

      return invoice.save();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
