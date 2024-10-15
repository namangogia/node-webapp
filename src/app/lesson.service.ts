import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Lesson {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.apiUrl}/lessons`);
  }

  getLesson(id: number): Observable<Lesson> {
    return this.http.get<Lesson>(`${this.apiUrl}/lessons/${id}`);
  }
}