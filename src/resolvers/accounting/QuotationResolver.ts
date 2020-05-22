import {
  Resolver,
  Mutation,
  Query,
  Arg,
  UseMiddleware,
  Ctx,
} from "type-graphql";
import { Quotation, QuotationModel } from "../../entity/accounting/Quotation";
import { QuotationInput } from "./types/quotation_input";
import { isAuth } from "../../middleware/is_auth_middleware";
import { MyContext } from "src/context/my_context";

@Resolver()
export class QuotationResolver {
  @Query(() => [Quotation!])
  @UseMiddleware(isAuth)
  async quotations(@Ctx() { payload }: MyContext) {
    const quotations = await QuotationModel.find({ clientId: payload?.userId });
    return quotations;
  }

  @Mutation(() => Quotation)
  @UseMiddleware(isAuth)
  async createQuotation(
    @Ctx() { payload }: MyContext,
    @Arg("quotation") quotationInput: QuotationInput
  ) {
    try {
      const quotation = await new QuotationModel({
        ...quotationInput,
        clientId: payload?.userId,
      });

      return quotation.save();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async update_quotation(
    @Ctx() { payload }: MyContext,
    @Arg("quotation_no") quotation_no: number
  ) {
    const quotationUpdate = QuotationModel.findOneAndUpdate(
      {
        quotation_no: quotation_no,
        userId: payload?.userId,
      },
      {
        new: true,
      }
    );

    return quotationUpdate;
  }
}
