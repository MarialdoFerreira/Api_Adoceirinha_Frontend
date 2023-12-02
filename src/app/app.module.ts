import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewItemFormComponent } from './components/new-item-form/new-item-form.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ItemViewComponent } from './components/item-view/item-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NewItemFormComponent,
    ListItemsComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
