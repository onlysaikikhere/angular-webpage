import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submitted-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submitted-component.html'
})
export class SubmittedDetailsComponent implements OnInit {
  data: any[] = [];

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
}