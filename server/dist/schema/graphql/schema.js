"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql `
    type Reservation {
        arrival: String
        departure: String
        guest_name: String
        hotel_name: String
        id: ID
    }

    type Query {
        reservation(id:ID): Reservation
        reservations: [Reservation!]
    }

    type Mutation {
        createReservation(guest_name:String, hotel_name:String, arrival:String, departure:String): Reservation
    }
`;
//# sourceMappingURL=schema.js.map