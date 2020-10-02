import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { HistoricComponent } from "./historic/historic.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { ModalCreateComponent } from "src/components/modal-create/modal-create.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, HomeComponent, DetailsComponent, HistoricComponent, ModalCreateComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule, MatDialogModule],
    providers: [HomeComponent, ModalCreateComponent],
    bootstrap: [AppComponent],
    entryComponents: [ModalCreateComponent],
})
export class AppModule {}
