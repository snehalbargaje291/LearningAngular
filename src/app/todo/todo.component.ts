import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  listOfItems:any[]=[];

  ngOnInit(): void {
    // Retrieve items from local storage on component initialization
    const storedItems = localStorage.getItem('todoItems');
    if (storedItems) {
      this.listOfItems = JSON.parse(storedItems);
    }
  }

  addTask(item:string) : void{
    this.listOfItems.push({id:this.listOfItems.length+1,name : item });
    this.saveItemsToLocalStorage();
  }
  removeTask(id:number) : void{
    this.listOfItems=this.listOfItems.filter(items=>items.id!==id);
    this.saveItemsToLocalStorage();
  }

  private saveItemsToLocalStorage(): void{
    localStorage.setItem('todoItems', JSON.stringify(this.listOfItems));
  }
}
