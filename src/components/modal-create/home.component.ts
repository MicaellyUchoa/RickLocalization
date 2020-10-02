import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataDimensions } from "server/dimensions";
import Dimensions from "src/models/dimension";
import { DataPersonage } from "../../../server/personage";
import Personage from "../../models/personage";
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
    title = "Home";
    personageList: Personage[];
    dimensionsList: Dimensions[];

    constructor(private router: Router) {
        this.personageList = DataPersonage;
        this.dimensionsList = DataDimensions;
    }

    openDetails(id: number) {
        this.router.navigate(["/details", id]);
    }
}
