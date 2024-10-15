import { Component, OnInit } from '@angular/core';
import { LessonService, Lesson } from '../lesson.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  lessons: Lesson[] = [];

  constructor(private lessonService: LessonService) {}

  ngOnInit() {
    this.lessonService.getLessons().subscribe(
      (lessons) => {
        this.lessons = lessons;
      },
      (error) => {
        console.error('Error fetching lessons:', error);
      }
    );
  }
}