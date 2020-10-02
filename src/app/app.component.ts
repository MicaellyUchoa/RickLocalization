import { Component } from "@angular/core";
import { DataDimensions } from "server/dimensions";
import Dimension from "src/models/dimension";
import { DataPersonage } from "../../server/personage";
import Personage from "../models/personage";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "RickLocalization";
    personageList: Personage[];
    dimensionsList: Dimension[];
    constructor() {
        this.personageList = DataPersonage;
        this.dimensionsList = DataDimensions;
    }
}
