import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ModalCreateComponent } from "src/components/modal-create/modal-create.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ModalCreateComponent, HttpClient],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatDialogModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
    ],
    providers: [HttpClient],
    bootstrap: [ModalCreateComponent],
})
export class ModalCreateModule {}
