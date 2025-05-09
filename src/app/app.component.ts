// Import necessary Angular modules and services
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service'; // Service to fetch data from an API
import { moveItemInArray } from '@angular/cdk/drag-drop'; // Utility function for drag-and-drop functionality

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Draggable Table Example';
  users: any[] = [];
  filteredUsers: any[] = [];
  searchText = '';

  // Inject the ApiService to fetch data
  constructor(private api: ApiService) {}

  // Lifecycle hook that runs after the component is initialized
  ngOnInit(): void {
    // Fetch data from the API when the component initializess
    this.api.getData().subscribe((data: any) => {
      this.users = data; 
      this.filteredUsers = [...data];
    });
  }

  // Method to filter users based on the search text
  filterUsers() {
    this.filteredUsers = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Method to handle drag-and-drop functionality
  drop(event: any): void {
    // Reorder the `filteredUsers` array based on the drag-and-drop event
    moveItemInArray(
      this.filteredUsers,
      event.previousIndex, // The original index of the dragged item
      event.currentIndex // The new index of the dragged item
    );
  }
}
