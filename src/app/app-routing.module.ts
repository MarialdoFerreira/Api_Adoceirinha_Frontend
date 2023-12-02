import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewItemFormComponent } from './components/new-item-form/new-item-form.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ItemViewComponent } from './components/item-view/item-view.component';

const routes: Routes = [
  { path: 'novo', component: NewItemFormComponent },
  { path: '', component: ListItemsComponent},
  { path: 'doce/:id', component: ItemViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
