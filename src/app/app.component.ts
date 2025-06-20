import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // <-- Important: import ReactiveFormsModule here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  employeeForm!: FormGroup;
  maxDate = new Date().toISOString().split('T')[0];
  genders = ['male', 'female', 'other'];
  departments = ['HR', 'Engineering', 'Marketing', 'Finance', 'Sales'];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      dob: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      altNumber: ['', Validators.pattern(/^\d{10}$/)],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      remember: [false] , 
      experience: [0],
      favoriteColor: ['#000000'],
      website: [''],
      salary: [''],
      resume: [null],
      bio: [''],
      department: ['']
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
}