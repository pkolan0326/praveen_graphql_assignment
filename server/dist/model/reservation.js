"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema_1 = require("../schema/mongo/schema");
exports.ReservationModel = mongoose_1.model("reservation", schema_1.ReservationSchema);
//# sourceMappingURL=reservation.js.map