import {
  Resolver,
  Query,
  Mutation,
  Arg,
  UseMiddleware,
  Ctx
} from "type-graphql";
import { Invoice, InvoiceModel } from "../../entity/accounting/Invoice";
import { isAuth } from "../../middleware/is_auth_middleware";
import { MyContext } from "../../context/my_context";

@Resolver()
export class InvoiceResolver {
  @Query(() => [Invoice!]!)
  @UseMiddleware(isAuth)
  invoices(@Ctx() { payload }: MyContext) {
    return InvoiceModel.find({ clientId: payload!.userId });
  }

  @Mutation(() => Invoice)
  @UseMiddleware(isAuth)
  async createInvoice(
    @Ctx() { payload }: MyContext,
    @Arg("invoice_no") invoice_no: number,
    @Arg("invoice_date") invoice_date: string,
    @Arg("customer") customer: string,
    @Arg("clientId") clientId: string,
    @Arg("deviceId") deviceId: string,
    @Arg("vat_amount") vat_amount: number,
    @Arg("total_excluding") total_excluding: number,
    @Arg("total_including") total_including: number
  ): Promise<Invoice> {
    clientId = await payload!.userId;

    if (!clientId) {
      throw new Error("not logged in");
    }

    try {
      const invoice = await InvoiceModel.create({
        invoice_no,
        invoice_date,
        customer,
        clientId,
        deviceId,
        vat_amount,
        total_excluding,
        total_including
      });

      invoice.save();
    } catch (error) {
      console.log(error);
      throw error;
    }

    return {
      invoice_no,
      invoice_date,
      customer,
      clientId,
      deviceId,
      vat_amount,
      total_excluding,
      total_including
    };
  }
}
