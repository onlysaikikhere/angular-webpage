import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-submitted-details',
  standalone: true,
  imports: [CommonModule , FormsModule , RouterModule],
  templateUrl: './submitted-component.html'
})
export class SubmittedDetailsComponent implements OnInit {
  data: any[] = [];
  searchText: string = '';
  selectedEmployee: any = null;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('submittedData');
      this.data = stored ? JSON.parse(stored) : [];
    } else {
      this.data = [];
    }
  }

  delete(index: number) {
    if (confirm('Are you sure you want to delete this entry?')) {
      this.data.splice(index, 1);
      localStorage.setItem('submittedData', JSON.stringify(this.data));
      this.loadData();
    }
  }

  edit(index: number) {
    localStorage.setItem('editIndex', index.toString());
    localStorage.setItem('editData', JSON.stringify(this.data[index]));
    window.location.href = '/';
  }

  openDialog(emp: any) {
    this.selectedEmployee = emp;
    // Show Bootstrap modal
    setTimeout(() => {
      const modal = new (window as any).bootstrap.Modal(document.getElementById('employeeModal'));
      modal.show();
    });
  }

  get filteredData() {
    if (!this.searchText) return this.data;
    const search = this.searchText.toLowerCase();
    return this.data.filter(emp =>
      Object.values(emp).some(val =>
        String(val).toLowerCase().includes(search)
      )
    );
  }
}