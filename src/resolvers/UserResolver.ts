import {
  Resolver,
  Query,
  Mutation,
  Arg
  //   ObjectType,
  //   Field
  // Ctx
} from "type-graphql";
import { UserModel } from "../entity/User";
import { hash /*compare*/ } from "bcryptjs";
//   import { MyContext } from "../context/MyContext";
//   import { createRefreshToken, createAccessToken } from "../auth/auth";
//   import { sendRefreshToken } from "../sentRefresToken/sendRefreshToken";

// @ObjectType()
// class LoginResponse {
//   @Field()
//   accessToken: string;
// }

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hi";
  }

  //for testing purposes only
  //   @Mutation(() => Boolean)
  //   async revokeRefreshTokensForUser(
  //     @Arg("userId", () => String) userId: string
  //   ) {
  //     await getConnection()
  //       .getRepository(User)
  //       .increment({ userId: userId }, "tokenVersion", 1);

  //     return true;
  //   }

  @Mutation(() => Boolean)
  async createUser(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const hashedpassword = await hash(password, 12);
    try {
      const user = await UserModel.create({
        email,
        password: hashedpassword
      });

      return (await user.save()) && true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // @Mutation(() => LoginResponse)
  // async login(
  //   @Arg("email") email: string,
  //   @Arg("password") password: string,
  //   @Ctx() { res }: MyContext
  // ): Promise<LoginResponse> {
  //   const user = await User.findOne({ where: { email } });
  //   if (!user) {
  //     throw new Error("User not found");
  //   }

  //   const valid = await compare(password, user.password);
  //   if (!valid) {
  //     throw new Error("incorrect password");
  //   }

  //   //succesfully login
  //   sendRefreshToken(res, createRefreshToken(user));

  //   return {
  //     accessToken: createAccessToken(user)
  //   };
  // }
}
