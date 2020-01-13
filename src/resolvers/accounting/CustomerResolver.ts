import {Query, Mutation, Resolver, ObjectType, InputType } from 'type-graphql';
import {Customer} from '../../entity/accounting/Customer';

@Resolver()
export class CustomerResovler {
    @Query(() => String)
    customer(){
        return 'hi';
    }

    @Mutation(() => Customer)
    createCustomer(
    
    ){
    }
}
