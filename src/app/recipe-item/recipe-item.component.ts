import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe-book/recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  selectRecipe() {
    // We don't need to specify a recipe since everytime this method is called, it is by its own recipe DOM element.
    // Taking this into account, every recipe item knows itself
    // and can emit a specific target event without passing itself as a param.
    this.recipeSelected.emit();
  }

}
