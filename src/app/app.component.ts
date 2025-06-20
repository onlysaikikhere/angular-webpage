import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, OnDestroy {
  employeeForm!: FormGroup;
  maxDate: string;
  genders = ['male', 'female', 'other'];
  departments = ['HR', 'Engineering', 'Marketing', 'Finance', 'Sales'];
  pdfFile: File | null = null;

  constructor(private fb: FormBuilder) {
    // Calculate max date for date picker (18 years ago)
    const today = new Date();
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    this.maxDate = eighteenYearsAgo.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      altNumber: ['', Validators.pattern(/^\d{10}$/)],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      remember: [false],
      experience: [0],
      favoriteColor: ['#000000'],
      website: ['', Validators.pattern(/https?:\/\/.+\..+/)],
      salary: [0, Validators.min(0)],
      resume: [null],
      bio: ['', Validators.maxLength(500)],
      department: ['', Validators.required]
    });
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
      console.log('Form submitted:', this.employeeForm.value);
      // Here you would typically send the form data to your backend
      // Note: For file uploads, you'll need to use FormData instead of JSON
    } else {
      this.employeeForm.markAllAsTouched();
      alert('Please fill out all required fields correctly.');
    }
  }

  ngOnDestroy(): void {
    // Clean up object URLs to prevent memory leaks
    if (this.pdfFile) {
      URL.revokeObjectURL(URL.createObjectURL(this.pdfFile));
    }
  }
}