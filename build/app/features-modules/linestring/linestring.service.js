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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linestring_data_1 = require("./linestring.data");
const linestring_responses_1 = require("./linestring.responses");
const turf_1 = __importDefault(require("@turf/turf"));
const intersection = (inputLineString) => __awaiter(void 0, void 0, void 0, function* () {
    if (!inputLineString || inputLineString.type !== 'Feature' || inputLineString.geometry.type !== 'LineString') {
        throw linestring_responses_1.LINESTRING_RESPONSES.INVALID_FORMAT;
    }
    const output = [];
    for (let line of linestring_data_1.linesData) {
        let lineString = turf_1.default.lineString([line.line.coordinates[0], line.line.coordinates[1]]);
        let intersection = turf_1.default.lineIntersect(inputLineString, lineString);
        if (intersection.features.length > 0) {
            output.push({ lineId: line.id, intersection });
        }
    }
    return output;
});
exports.default = { intersection };
