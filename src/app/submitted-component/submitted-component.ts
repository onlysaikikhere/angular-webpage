import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submitted-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submitted-component.html'
})
export class SubmittedDetailsComponent implements OnInit {
  data: any;

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('submittedData');
      this.data = stored ? JSON.parse(stored) : null;
    } else {
      this.data = null;
    }
  }
}