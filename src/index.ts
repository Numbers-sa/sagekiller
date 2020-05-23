import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";
import { verify } from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { UserModel } from "./entity/accounting/User";

//authentication
import { createAccessToken, createRefreshToken } from "./auth/auth";
import { send_refresh_token } from "./sent_refresh_token/send_refresh_token";

//resolvers
import { UserResolver } from "./resolvers/accounting/UserResolver";
import { InvoiceResolver } from "./resolvers/accounting/InvoiceResolver";
import { QuotationResolver } from "./resolvers/accounting/QuotationResolver";
import { CustomerResovler } from "./resolvers/accounting/CustomerResolver";
// import { CompanyResolver } from "./resolvers/accounting/CompanyResolver";

(async () => {
  const app = express();
  app.use(cookieParser());
  app.get("/", (_req, res) => res.send("hello"));

  //this will send a new token if previous token has expired
  app.post("/refresh_token", async (req, res) => {
    const token = req.cookies.tid;
    if (!token) {
    }

    //token is valid and
    //send back access token
    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESHTOKEN_TOKEN_SECRET!);
    } catch (error) {
      console.log(error);
      return res.send({ ok: false, accessToken: "" });
    }
    const user = await UserModel.findOne({ userId: payload.userId });

    if (!user) {
      return res.send({ ok: false, accessToken: "" });
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      return res.send({
        ok: false,
        accessToken: "",
      });
    }

    //tampering refresh token and creates new refresh token
    send_refresh_token(res, createRefreshToken(user));

    return res.send({ ok: true, accessToken: createAccessToken(user) });
  });

  //server related

  try {
    await connect(
      "mongodb+srv://Ngomanaft:Testing123!@marscloudservices-drqkd.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "Numberz_Cloud_Accounting",
        useFindAndModify: false,
      }
    );
  } catch (error) {
    //if unable to connect it should connect to my machines database for

    console.log(error);
    throw error;
  }

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        UserResolver,
        InvoiceResolver,
        QuotationResolver,
        CustomerResovler,
      ],
      validate: false, //remember to enable this feature when decoraters are used
    }),
    //context
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log("express server running on localhost:4000");
  });
})();
