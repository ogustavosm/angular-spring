import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ChecklistItem } from '../_models/checklist_item'; // Adjust the import path as necessary
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { CATEGORY_DATA } from '../category/category.component';
import { Category } from '../_models/category';

@Component({
  selector: 'app-checklist-form',
  standalone: false,
  templateUrl: './checklist-form.component.html',
  styleUrl: './checklist-form.component.css'
})
export class ChecklistFormComponent implements OnInit {


  @Input() public actionName = 'Editar';
  @Input() public checklistItem!: ChecklistItem;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(FormGroupDirective) checklistFormGroupDirective!: FormGroupDirective;

  public categories: Category[] = CATEGORY_DATA;

  public checklistForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checklistForm = this.formBuilder.group(
      {
        completed: [this.checklistItem != null ? this.checklistItem.completed : false, Validators.required],
        description: [this.checklistItem != null ? this.checklistItem.description : '', Validators.required],
        deadline: [this.checklistItem != null ? new Date(this.checklistItem.deadline) : new Date(),  Validators.required],
        category: [this.checklistItem != null ? this.checklistItem.category : null, Validators.required]
      }
    );
  }

  private clearForm(){
    this.checklistForm.reset();
    this.checklistFormGroupDirective.resetForm();
  }


  public save(){
    this.formCloseEvent.emit(true);
  }


  public cancel(){
    this.formCloseEvent.emit(false);
  }



}
