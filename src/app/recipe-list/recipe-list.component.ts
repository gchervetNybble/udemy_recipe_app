import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe-book/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://images.food52.com/Wt2somcs4xnnoDfmLr54hOKGAQM=/326x216/d4a10002-0bd0-44' +
    '1a-a0fd-9e2143748e0b--2019-0405_caramelized-cream-eggs-genius-recipes_3x2_ty-mecham_001.jpg')
  ];
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeEl) {
    this.recipeSelected.emit(recipeEl);
  }

}
