import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { DataHistoric } from "server/historic";

@Component({
    selector: "app-modal-create",
    templateUrl: "./modal-create.component.html",
    styleUrls: ["./modal-create.component.scss"],
    providers: [HttpClient],
})
export class ModalCreateComponent {
    tripForm: FormGroup;
    validationMessages = {
        to: [{ type: "required", message: "A inserção do ponto inicial é obrigatória" }],
        from: [{ type: "required", message: "A inserção do destino é obrigatória" }],
    };
    status: string;
    isSubmitted = false;
    constructor(public dialogRef: MatDialogRef<ModalCreateComponent>, @Inject(MAT_DIALOG_DATA) public id: string) {
        if (id) {
            console.log(id);
            this.formValidations();
        }
    }

    formValidations() {
        this.tripForm = new FormGroup({
            to: new FormControl("", Validators.compose([Validators.required])),
            from: new FormControl("", Validators.compose([Validators.required])),
        });
    }

    sendHistoric() {
        DataHistoric.push({ ...this.tripForm.value, idPersonage: 3, id: DataHistoric.length });
        console.log(DataHistoric);
    }

    closeModal() {
        this.dialogRef.close("modal-create");
    }
}
