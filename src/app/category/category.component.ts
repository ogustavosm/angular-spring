import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';

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

  constructor() { }

  ngOnInit(): void {
  }

  public editCategory(category: Category){
    console.log('edit category clicked');
  }

  public deleteCategory(category: Category){
    console.log('delete category clicked');
  }

  public createNewCategory(){
    console.log('Create new category clicked');
  }

}
