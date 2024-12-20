import { Component } from '@angular/core';
import { Course } from '../../types/course';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-latest-courses',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './latest-courses.component.html',
  styleUrls: ['./latest-courses.component.css']
})
export class LatestCourseComponent {
  latestCourses: Course[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCourses().subscribe((courses) => {
      for (let i = courses.length - 1; i >= courses.length - 3 && i >= 0; i--) {
        if (courses[i] === undefined) {
          return;
        } else {
          this.latestCourses.push(courses[i]);
        }
      }
    });
  }
}
