import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  appTitle = 'Employee Management System';
  
  navItems = [
    { title: 'Home', route: '/', icon: 'fas fa-home' },
    { title: 'Add Employee', route: '/add-employee', icon: 'fas fa-user-plus' },
    { title: 'View Employees', route: '/view-employee', icon: 'fas fa-users' }
  ];
}
