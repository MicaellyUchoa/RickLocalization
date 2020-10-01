import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardComponent } from "../components/card/card.component";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { TesteComponent } from "./teste/teste.component";

@NgModule({
    declarations: [AppComponent, CardComponent, HomeComponent, DetailsComponent, TesteComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
    providers: [CardComponent, HomeComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
