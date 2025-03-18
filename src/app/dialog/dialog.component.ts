import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: false,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MatDialogRef) public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    if (data.leftButtonLabel){
      this.leftButtonLabel = data.leftButtonLabel;
    }

    if (data.rightButtonLabel){
      this.rightButtonLabel = data.rightButtonLabel;
    }

    if (this.dialogMsg){
      this.dialogMsg = data.dialogMsg;
    }
  }

  public dialogMsg = 'Deseja continuar com essa ação?';
  public leftButtonLabel = 'Cancelar';
  public rightButtonLabel = 'Ok';

  ngOnInit(): void {
  }


  public clickedLeftButton(){
    this.dialogRef.close(false);
  }

  public clickedRightButton(){
    this.dialogRef.close(false);
  }


}
