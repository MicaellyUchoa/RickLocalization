import Dimension from "./dimension";

export default interface Historic {
    id?: number;
    idPersonage?: number;
    dimensionTo: Dimension;
    dimensionFrom: Dimension;
}
