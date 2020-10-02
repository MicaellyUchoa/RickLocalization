import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import Dimension from "src/models/dimension";
import Personage from "src/models/personage";
import { Location } from "@angular/common";
import Historic from "src/models/historic";
import { DataHistoric } from "server/historic";

@Component({
    selector: "app-historic",
    templateUrl: "./historic.component.html",
    styleUrls: ["./historic.component.scss"],
})
export class HistoricComponent {
    id: number;
    personage: Personage;
    dimension: Dimension;
    historic: Historic[];

    constructor(private activatedRoute: ActivatedRoute, private location: Location) {
        this.id = this.activatedRoute.snapshot.params.id;
        this.getHistoric(this.activatedRoute.snapshot.params.id);
    }

    getHistoric(id: number) {
        let historicTemp = [];
        DataHistoric.map(async item => {
            if (item.idPersonage == id) {
                historicTemp.push(item);
            }
        });
        this.historic = historicTemp;
    }

    goBack() {
        this.location.back();
    }
}
