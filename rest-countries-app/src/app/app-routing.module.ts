import { RouterModule, Routes } from "@angular/router";
import { CountryInformationsComponent } from "./country-informations/country-informations.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./Home/Home.component";

const appRoutes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'country', component: CountryInformationsComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }