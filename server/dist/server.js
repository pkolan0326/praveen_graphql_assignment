"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const federation_1 = require("@apollo/federation");
const apollo_server_1 = require("apollo-server");
const graphql_subscriptions_1 = require("graphql-subscriptions");
// import mongoose from "mongoose";
const mongoose = require("mongoose");
const config_1 = require("./config/config");
const resolver_1 = require("./resolver/resolver");
const schema_1 = require("./schema/graphql/schema");
mongoose.connect(config_1.MongoDB);
const pubsub = new graphql_subscriptions_1.PubSub();
const server = new apollo_server_1.ApolloServer({
    schema: federation_1.buildFederatedSchema([
        {
            typeDefs: schema_1.typeDefs,
            resolvers: resolver_1.resolvers,
        }
    ])
});
server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=server.js.map