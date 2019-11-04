"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ReservationSchema = new mongoose_1.Schema({
    guest_name: {
        type: String
    },
    hotel_name: {
        type: String
    },
    arrival: {
        type: String
    },
    departure: {
        type: String
    }
}, { id: true });
//# sourceMappingURL=schema.js.map