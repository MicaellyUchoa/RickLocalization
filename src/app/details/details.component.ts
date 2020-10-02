import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataDimensions } from "server/dimensions";
import { DataPersonage } from "server/personage";
import Dimension from "src/models/dimension";
import Personage from "src/models/personage";
import { Location } from "@angular/common";
import { ModalCreateComponent } from "src/components/modal-create/modal-create.component";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.scss"],
})
export class DetailsComponent {
    id: number;
    personage: Personage;
    dimension: Dimension;

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private router: Router,
        public matDialog: MatDialog
    ) {
        this.id = this.activatedRoute.snapshot.params.id;
        this.getPersonage(this.activatedRoute.snapshot.params.id);
    }

    getPersonage(id: number) {
        DataPersonage.filter(async item => {
            if (item.id == id) {
                this.personage = item;
                this.getDimension(item.dimensionsId);
            }
        });
    }

    getDimension(id: number) {
        DataDimensions.filter(item => {
            if (item.id === id) this.dimension = item;
        });
    }

    goBack() {
        this.location.back();
    }

    openHistoric() {
        this.router.navigate(["/historic", this.id]);
    }
    openModal() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = this.id;
        dialogConfig.id = "modal-create";
        this.matDialog.open(ModalCreateComponent, dialogConfig);
    }
}
