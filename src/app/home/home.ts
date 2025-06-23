import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule,FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule , FormsModule ], 
})
export class Home implements OnInit, OnDestroy {
list: any[] = [] ; 
employeeForm!: FormGroup;
  maxDate: string;
  genders = ['male', 'female', 'other'];
  departments = ['HR', 'Engineering', 'Marketing', 'Finance', 'Sales'];
  pdfFile: File | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    const today = new Date();
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    this.maxDate = eighteenYearsAgo.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    // Restore previous submissions from localStorage
    const stored = localStorage.getItem('submittedData');
    this.list = stored ? JSON.parse(stored) : [];

    this.employeeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      dob: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      altNumber: ['', Validators.pattern(/^\d{10}$/)],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      remember: [false],
      experience: [0],
      favoriteColor: ['#000000'],
      website: ['', Validators.required],
      salary: [0],
      resume: [null],
      bio: ['', Validators.maxLength(500)],
      department: ['', Validators.required]
    });

    // Check if editing
    const editData = localStorage.getItem('editData');
    const editIndex = localStorage.getItem('editIndex');
    if (editData && editIndex !== null) {
      this.employeeForm.patchValue(JSON.parse(editData));
      // Optionally, remove editData after loading
      localStorage.removeItem('editData');
    }
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file && file.type === 'application/pdf') {
        this.pdfFile = file;
        this.employeeForm.patchValue({
          resume: file.name
        });
      } else {
        this.pdfFile = null;
        this.employeeForm.patchValue({
          resume: null
        });
        alert('Please upload a valid PDF file.');
      }
    }
  }

  openPdf(): void {
    if (this.pdfFile) {
      const fileURL = URL.createObjectURL(this.pdfFile);
      window.open(fileURL, '_blank');
    }
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const editIndex = localStorage.getItem('editIndex');
      if (editIndex !== null) {
        // Update existing entry
        this.list[+editIndex] = this.employeeForm.value;
        localStorage.removeItem('editIndex');
      } else {
        // Add new entry
        this.list.push(this.employeeForm.value);
      }
      localStorage.setItem('submittedData', JSON.stringify(this.list));
      alert('Form submitted successfully!');
      this.employeeForm.reset();
    } else {
      this.employeeForm.markAllAsTouched();
      alert('Please fill out all required fields correctly.');
    }
  }
  viewall():void{
     if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('submittedData', JSON.stringify(this.list));
      }
    this.router.navigate(['/submitted']);
  }
  ngOnDestroy(): void {
    // Clean up object URLs to prevent memory leaks
    if (this.pdfFile) {
      URL.revokeObjectURL(URL.createObjectURL(this.pdfFile));
    }
    
  }
  fillDummyData(): void {
    this.employeeForm.patchValue({
      email: 'john.doe@example.com',
      password: 'Password123!',
      dob: '1990-01-01',
      number: '9876543210',
      altNumber: '9123456789',
      address: '123 Main St, City',
      gender: 'male',
      remember: true,
      experience: 5,
      favoriteColor: '#3498db',
      website: 'https://example.com',
      salary: 50000,
      resume: 'dummy_resume.pdf',
      bio: 'This is a sample bio.',
      department: 'Engineering'
    });
  }
}
