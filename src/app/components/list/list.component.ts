import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  ListUser } from '../../Model/ListUser';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  listuser:ListUser[]=[{id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin', status: 'Active'},
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User', status: 'Active' },
  { id: 4, name: 'David', email: 'david@example.com', role: 'Admin', status: 'Inactive' },
  { id: 5, name: 'Eve', email: 'eve@example.com', role: 'User', status: 'Active' }]


}
