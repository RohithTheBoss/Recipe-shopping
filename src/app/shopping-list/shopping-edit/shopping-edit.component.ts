import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/ingredient.model';
import { ShoppingService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
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
  @ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
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

  }


}
