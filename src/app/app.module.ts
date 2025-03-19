import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryComponent } from './category/category.component';
import { DialogComponent } from './dialog/dialog.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistEditComponent } from './checklist-edit/checklist-edit.component';
import { ChecklistFormComponent } from './checklist-form/checklist-form.component';

//configuring pt-BR locale
import {LOCALE_ID, NgModule} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    CategoryComponent,
    DialogComponent,
    CategoryEditComponent,
    CategoryFormComponent,
    ChecklistComponent,
    ChecklistEditComponent,
    ChecklistFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
