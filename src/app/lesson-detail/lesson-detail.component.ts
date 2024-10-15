import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService, Lesson } from '../lesson.service';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  lesson: Lesson | undefined;

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.lessonService.getLesson(id).subscribe(
      (lesson) => {
        this.lesson = lesson;
      },
      (error) => {
        console.error('Error fetching lesson:', error);
      }
    );
  }
}