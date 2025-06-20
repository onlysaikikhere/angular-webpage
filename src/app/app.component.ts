import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  employeeForm!: FormGroup;
  maxDate = new Date().toISOString().split('T')[0];
  genders = ['male', 'female', 'other'];
  departments = ['HR', 'Engineering', 'Marketing', 'Finance', 'Sales'];

  selectedFile: File | null = null;
  fileUrl: SafeResourceUrl | null = null;
  fileName: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      dob: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      altNumber: ['', Validators.pattern(/^\d{10}$/)],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      remember: [false],
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

  onFileSelected(event: Event) {
    this.isLoading = true;
    this.errorMessage = '';
    const input = event.target as HTMLInputElement;
    
    if (!input.files?.length) {
      this.isLoading = false;
      return;
    }

    const file = input.files[0];
    
    // Clear previous file URL if exists
    if (this.fileUrl) {
      URL.revokeObjectURL(this.fileUrl.toString());
    }

    // Reset file-related properties
    this.selectedFile = null;
    this.fileUrl = null;
    this.fileName = '';

    // Validate file type
    if (file.type !== 'application/pdf') {
      this.errorMessage = 'Please select a valid PDF file';
      this.isLoading = false;
      this.employeeForm.patchValue({ resume: null });
      return;
    }

    this.selectedFile = file;
    this.fileName = file.name;
    const url = URL.createObjectURL(file);
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.employeeForm.patchValue({ resume: file });
    this.isLoading = false;
  }

  ngOnDestroy() {
    // Clean up object URLs
    if (this.fileUrl) {
      URL.revokeObjectURL(this.fileUrl.toString());
    }
  }
}