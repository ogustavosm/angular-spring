import { Component, OnInit } from '@angular/core';
import { CATEGORY_DATA } from '../category/category.component';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistItem } from '../_models/checklist_item';
import { DialogComponent } from '../dialog/dialog.component';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';

export const CHECKLIST_DATA = [
  {guid: 'aaa-bbb-ccc-ddd', completed: false, description: 'Ir ao oftalmologista', deadline: Date.now(),
    postDate: Date.now(), category: CATEGORY_DATA.find(x => x.name == 'Saúde')
  },
  {guid: 'aaa-bbb-ccc-ddd', completed: true, description: 'Reunião com o gerente regional', deadline: Date.now(),
    postDate: Date.now(), category: CATEGORY_DATA.find(x => x.name == 'Trabalho')
  }
];

@Component({
  selector: 'app-checklist',
  standalone: false,
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent implements OnInit {

  public dataSource = CHECKLIST_DATA;

  public displayedColumns: string[] = ['id', 'completed', 'description', 'deadline', 'postDate', 'category', 'actions'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public updateCompleteStatus(status: boolean){
    console.log(`status alterado ${status}`);
  }

  public createNewItem() {
    console.log('Criar novo item do checklist clicado');
    this.dialog.open(ChecklistEditComponent, {
      disableClose: true, data: {actionName: 'Criar'}
    }).afterClosed().subscribe(resp => {
      console.log('Fechando modal de criação');
    });
  }

  public updateChecklistItem(checklistitem: ChecklistItem) {
    console.log("Atualizando item do checklist");
    this.dialog.open(ChecklistEditComponent, {
      disableClose: true, data: {updatableChecklistItem: checklistitem, actionName: 'Editar'}
    }).afterClosed().subscribe(resp => {
      console.log('Fechando modal de edição');
    });
  }

  public deleteChecklistItem(checklist: ChecklistItem) {
    console.log("Apagando item do checklist");
    this.dialog.open(DialogComponent, { disableClose: true,
      data: {msg: 'Você deseja realmente apagar esse item?', leftButtonLabel: 'Cancelar', rightButtonLabel: 'Ok' }
    }).afterClosed().subscribe(resp => {
      console.log('Janela modal confirmar apagar fechada');
    });
  }


}
