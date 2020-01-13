import {Resolver, Mutation, Query, Arg} from 'type-graphql';
import {Quotation} from '../../entity/accounting/Quotation';

@Resolver()
export class QuotationResolver {
  @Query(() => String)
  testing() {
    return 'hi';
  }

  @Mutation(() => Quotation)
  async createQuotation(
    @Arg('quotation_no') quotation_no: number,
    @Arg('quotation_date') quotation_date: string,
    @Arg('clientId') clientId: string,
    @Arg('customer') customer: string,
    @Arg('deviceId') deviceId: string,
    @Arg('vat_amount') vat_amount: number,
    @Arg('total_excluding') total_excluding: number,
    @Arg('total_including') total_including: number,
  ) {
    await Quotation.insert({
      quotation_no,
      quotation_date,
      customer,
      deviceId,
      vat_amount,
      total_excluding,
      total_including,
      clientId,
    });

    return {
      quotation_no,
      quotation_date,
      customer,
      deviceId,
      vat_amount,
      total_excluding,
      total_including,
      clientId,
    };
  }
}
