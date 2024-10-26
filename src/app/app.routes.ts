import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

export const routes: Routes = [
    {path:'',redirectTo:'/list-component',pathMatch:'full'},
    {path:'list-component', component:ListComponent},
    {path:'details-component',component:DetailsComponent },
    {path:'add-new-component',component: AddNewComponent},
    {path:'update-component',component:UpdateComponent},
    {path:'delete-component',component:DeleteComponent },
];
