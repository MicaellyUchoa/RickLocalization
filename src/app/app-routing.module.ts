import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { HistoricComponent } from "./historic/historic.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: "", pathMatch: "full", component: HomeComponent },
    { path: "details/:id", pathMatch: "full", component: DetailsComponent },
    { path: "historic/:id", pathMatch: "full", component: HistoricComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
