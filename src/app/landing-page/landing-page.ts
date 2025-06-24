import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [RouterModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
  title = 'Employee Management System';
  subtitle = 'Streamline your HR processes with our comprehensive employee management solution';
  
  features = [
    {
      title: 'Add Employee',
      description: 'Easily add new employees with detailed information',
      icon: '👤'
    },
    {
      title: 'View Employees',
      description: 'Browse and manage your employee database',
      icon: '📋'
    },
    {
      title: 'Secure Storage',
      description: 'All employee data is securely stored locally',
      icon: '🔒'
    }
  ];
}
