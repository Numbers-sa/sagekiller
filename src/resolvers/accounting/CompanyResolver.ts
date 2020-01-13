import {Arg, Resolver, Query, Mutation} from 'type-graphql';
import {Company} from '../../entity/accounting/Company';
//import {isAuth} from '../../middleware/is_auth_middleware';

@Resolver()
export class CompanyResolver {
  @Query(() => String)
  testing() {
    return 'hi';
  }

  @Mutation(() => Company)
  // @UseMiddleware(isAuth)
  async createCompany(
    @Arg('clientId') clientId: string,
    @Arg('deviceId') deviceId: string,
    @Arg('companyId') companyId: string,
    @Arg('name') name: string,
    @Arg('reg_number') reg_number: string,
    @Arg('vat_number') vat_number: string,
    @Arg('charge_vat') charge_vat: string,
  ) {
    try {
      await Company.insert({
        clientId,
        deviceId,
        companyId,
        name,
        reg_number,
        vat_number,
        charge_vat,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }

    return {
      clientId,
      deviceId,
      companyId,
      name,
      reg_number,
      vat_number,
      charge_vat,
    };
  }
}
