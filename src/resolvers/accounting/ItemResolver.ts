import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { ItemInput } from "./types/item_input";
import { Item, ItemModel } from "../../entity/accounting/Item";

@Resolver()
export class ItemResolver {
  @Query(() => [Item])
  async items(@Arg("clientId") clientId: string) {
    try {
      return ItemModel.find({ clientId });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @Mutation(() => Item)
  async update_item(
    @Arg("item_code") item_code: string,
    @Arg("clientId") clientId: string,
    @Arg("update_item") update_item: ItemInput
  ) {
    try {
      const updateItem = await ItemModel.findOneAndUpdate(
        { item_code: item_code, userId: clientId },
        {
          ...update_item,
        },
        { new: true }
      );

      console.log(updateItem);
      return updateItem;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  @Mutation(() => Boolean)
  async delete_item(
    @Arg("item_code") item_code: string,
    @Arg("clientId") clientId: string
  ) {
    try {
      const deleteItem = ItemModel.findOneAndDelete(
        {
          item_code: item_code,
          clientId: clientId,
        },

        (err, docs) => {
          if (err) {
            console.log(err);
            throw err;
          } else {
            console.log(docs);
          }
        }
      );

      console.log(deleteItem);
      return true;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  @Mutation(() => Item)
  async createItem(@Arg("item") itemInput: ItemInput) {
    try {
      const item = await new ItemModel({
        ...itemInput,
      });

      return item.save();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
