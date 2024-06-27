import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user = {
    courses: ['Angular Basics', 'Node.js Essentials','tensorflow basics'],
    jobs: [
      { name: 'Frontend Developer', location: 'Greymatics-chennai' },
      { name: 'Backend Developer', location: 'honeywell -madurai' },
      { name: 'Full Stack Developer', location: 'Tcs-bangalore' }
    ],
    selectedJob: ''
  };

  filteredJobs: any[] = [];

  constructor() {}

  filterJobs(job: string) {
    this.filteredJobs = this.user.jobs.filter(j => j.name.toLowerCase().includes(job.toLowerCase()));
  }
}
