import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  locations: string[] = ['Hyderabad', 'Delhi', 'Bangalore'];
  selectedLocation: string = 'Bangalore';

  changeLocation(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedLocation = selectElement.value;
  }
}
