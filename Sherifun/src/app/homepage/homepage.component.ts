import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true, // Indicates it's a standalone component
  imports: [CommonModule], // CommonModule provides *ngFor and *ngIf
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})

export class HomepageComponent implements OnInit {
  posts = [
    { title: 'Welcome to Sherifun!', content: 'This is the first post.', author: 'Admin' },
    { title: 'Second Post', content: 'This is another post on Sherifun.', author: 'User123' },
    { title: 'Third Post', content: 'Here is some more content.', author: 'User456' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
