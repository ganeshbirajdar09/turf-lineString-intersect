
export interface ILine {
  id: string;
  line: {
    type: "LineString",
    coordinates: number[][]
  }
}

interface ILineStringGeometry {
  type: "LineString";
  coordinates: [number, number][];
}
export interface ILineString {
  type: "Feature";
  geometry: ILineStringGeometry;

}

export interface IGeoJsonInput {
  lineString: ILineString
}

