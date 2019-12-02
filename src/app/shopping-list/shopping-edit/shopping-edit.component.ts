import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/ingredient.model';
import { ShoppingService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('nameInput') nameInputRef:ElementRef;
  // @ViewChild('amountInput') amountInputRef:ElementRef;
  // @Output() ingredientAdded=new EventEmitter<Ingredient>();
  
  // onAddingIngredient()
  // {
  //   console.log('inside onAddingIngredient')
  //   const name=this.nameInputRef.nativeElement.value;
  //   const amount=this.amountInputRef.nativeElement.value;
  //   const newIngredient=new Ingredient(name,amount);
  //   this.ingredientAdded.emit(newIngredient); 
  // }
  // constructor() { }

  // ngOnInit() {
  // }
  ///////////////////////using service///////////////
  /*@ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;

  constructor(private slService:ShoppingService)
  {}
  onAddingIngredient(name:string,amount:number)
   {
     console.log('inside onAddingIngredient   '+name+'  '+amount)
    this.slService.ingredientAdded.emit(new Ingredient(name,amount))
  }

  ngOnInit()
  {

  }*/
///using forms
@ViewChild('f', {static: false}) slForm: NgForm;
editMode = false;
editingItemindex: number;
editingIngrident: Ingredient;
subStartedEditing = new Subscription();

constructor(private slService: ShoppingService)
  {}
  onAddOrUpdateItem(form: NgForm)
  {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.slService.updateIngredient(this.editingItemindex, newIngredient);
    }
    else {
    this.slService.addIngredient(newIngredient);
    }
    form.reset();
    this.editMode=false;
  }
  ngOnInit()
  {
this.subStartedEditing = this.slService.startedEditing.subscribe((index: number) => {
  this.editingItemindex = index;
  this.editMode = true;
  console.log('index: '+index);
  this.editingIngrident = this.slService.getIngredient(index);
  this.slForm.setValue({
    name : this.editingIngrident.name,
    amount : this.editingIngrident.amount
  });
});
  }
  deleteIngredient(){
      this.slService.deletingIngredient(this.editingItemindex);
      this.slForm.reset();
      this.editMode = false;
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(){
  this.subStartedEditing.unsubscribe();
  }
}
