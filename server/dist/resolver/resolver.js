"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const reservation_1 = require("../model/reservation");
exports.resolvers = {
    Query: {
        reservation(parent, args, _) {
            return __awaiter(this, void 0, void 0, function* () {
                return reservation_1.ReservationModel.findById(args.id).exec();
            });
        },
        reservations(parent, args, _) {
            return __awaiter(this, void 0, void 0, function* () {
                return reservation_1.ReservationModel.find().exec();
            });
        },
    },
    Mutation: {
        createReservation(parent, args, _) {
            return __awaiter(this, void 0, void 0, function* () {
                const reservation = new reservation_1.ReservationModel(args);
                return reservation.save();
            });
        }
    },
};
//# sourceMappingURL=resolver.js.map