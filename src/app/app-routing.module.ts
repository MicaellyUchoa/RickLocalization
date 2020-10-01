import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: "", pathMatch: "full", component: HomeComponent },
    { path: "details/:id", pathMatch: "full", component: DetailsComponent, data: { animation: "article" } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
