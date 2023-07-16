import { linesData } from "./linestring.data";
import { LINESTRING_RESPONSES } from "./linestring.responses";
import turf from "@turf/turf"
import { Feature, LineString } from '@turf/helpers';


const intersection = async (inputLineString: Feature<LineString>) => {

    if (!inputLineString || inputLineString.type !== 'Feature' || inputLineString.geometry.type !== 'LineString') {
        throw LINESTRING_RESPONSES.INVALID_FORMAT
    }
    const output = [];

    for (let line of linesData) {

        let lineString = turf.lineString([line.line.coordinates[0], line.line.coordinates[1]]);

        let intersection = turf.lineIntersect(inputLineString, lineString);

        if (intersection.features.length > 0) {
            output.push({ lineId: line.id, intersection });
        }
    }

    return output
}

export default { intersection }