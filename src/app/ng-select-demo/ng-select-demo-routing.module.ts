import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { NgSelectDemoComponent } from './ng-select-demo/ng-select-demo.component';


const routes: Routes =[
    {
        path: '',
        component: NgSelectDemoComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgSelectDemoRoutingModule {

}