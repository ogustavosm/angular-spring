import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CategoryEditComponent } from '../category-edit/category-edit.component';

export const CATEGORY_DATA = [
  {name: 'Educação', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Saúde', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Trabalho', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Outros', guid: 'aaa-bbb-ccc-ddd'}
];

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{

  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public editCategory(inputCategory: Category){
    console.log('edit category clicked');
    this.dialog.open(CategoryEditComponent, {disableClose: true, data: { editableCategory: inputCategory}
      }).afterClosed().subscribe(resp => {
        console.log('Modal editar fechada');
      });
  }


  public deleteCategory(category: Category){
    this.dialog.open(DialogComponent, {disableClose: true, data: {
      msg: 'Você tem certeza que gostaria de apagar a categoria?', leftButtonLabel: 'Cancelar', rightButtonLabel: 'Sim'
      }}).afterClosed().subscribe(resp => {
        console.log("Modal apagar fechada")
      }
    )
  }

  public createNewCategory(){
    console.log('create new category clicked');
    this.dialog.open(CategoryEditComponent, {disableClose: true, data: { actionsName: 'Criar' }
      }).afterClosed().subscribe(resp => {
        console.log("Modal criar fechada")
      }
    )
  }

}
