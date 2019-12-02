import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import {  FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
editMode: boolean=false;
id:number;
recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeServ: RecipeService,private router: Router) { }

  /*ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>
      {
        this.id=+params['id'];
        this.editMode= params['id']!=null;
        console.log(this.editMode)  
    })
  }*/

  //using forms
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id =+params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        this.initForm();
    });
  }

initForm()
{
  let recipeName = '';
  let recipeImagepath = '';
  let recipeDescription = '';
  let ingredientsToEdit = new FormArray([]);
  if(this.editMode)
  {
    const recipe = this.recipeServ.getRecipe(this.id);
    recipeName = recipe.name;
    recipeImagepath = recipe.imagePath;
    recipeDescription = recipe.content;
    if (recipe['recipeIngredients']) {
      for( let ing of recipe.recipeIngredients)
      {
        ingredientsToEdit.push(
          new FormGroup(
            {
              'name' : new FormControl(ing.name, Validators.required),
              'amount' : new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            }
          )
        )
      }
    }
  }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath' : new FormControl(recipeImagepath, Validators.required),
      'content' : new FormControl(recipeDescription, Validators.required),
      'recipeIngredients' : ingredientsToEdit
    }

    )
  

}
get controls() { // a getter!
  return (<FormArray>this.recipeForm.get('recipeIngredients')).controls;
}
onAddIngredient(){
      (<FormArray>(this.recipeForm.get('recipeIngredients'))).push(
        new FormGroup({
          'name' : new FormControl(),
          'amount' : new FormControl()
        })
      );
}
onSubmit()
{
  const newRecipe = new Recipe(this.recipeForm.value['name'], this.recipeForm.value['description'], this.recipeForm.value['imagePath'], this.recipeForm.value['ingredients']);
  console.log('inside onSunmit');
  console.log(this.recipeForm.value);
  if(this.editMode)
  {
    this.recipeServ.updateRecipe(this.recipeForm.value , this.id); // here we are using here this.recipeForm.value insteas as newRecipe because if we observe the recipeform object it will be same as recipe object(labels)
    //this.recipeServ.updateRecipe(newRecipe , this.id);
  }

  else {
  this.recipeServ.addRecipe(this.recipeForm.value);
  //this.recipeServ.addRecipe(newRecipe);
  }
  this.onCancel(); // calling this here so that when form is submited, the form wont stick on ui
}

onCancel()
{
  this.router.navigate(['../'],{relativeTo: this.route});//moves one url back
}
onDeleteIngredient(index : number) {
  (<FormArray>this.recipeForm.get('recipeIngredients')).removeAt(index);

}

}
