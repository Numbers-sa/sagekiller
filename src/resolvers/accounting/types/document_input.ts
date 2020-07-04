import { InputType, Field } from "type-graphql";
import { Document } from "../../../entity/accounting/Document_Details";

@InputType()
export class DocumentInput implements Partial<Document> {
  @Field()
  document_type: string;

  @Field()
  document_number: number;

  @Field()
  code: string;

  @Field()
  description: string;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field()
  total: number;
}
