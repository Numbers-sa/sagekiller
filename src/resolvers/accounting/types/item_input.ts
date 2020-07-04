import { InputType, Field } from "type-graphql";
import { Item } from "../../../entity/accounting/Item";

@InputType()
export class ItemInput implements Partial<Item> {
  @Field()
  item_type: string;

  @Field({ nullable: true })
  item_code: string;

  @Field()
  item_description: string;

  @Field()
  cost_price: number;

  @Field({ defaultValue: 0 })
  quantity: number;

  @Field()
  selling_price: number;

  @Field({ nullable: true })
  clientId: string;

  @Field({ nullable: true })
  deviceId: string;
}
