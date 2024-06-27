import { Component } from '@angular/core';

@Component({
  selector: 'app-interview-score',
  templateUrl: './interview-score.component.html',
  styleUrls: ['./interview-score.component.css']
})
export class InterviewScoreComponent {
  formData = {
    city: '',
    position: '',
    experience: ''
  };

  submitted = false;
  interviewQuestions: string[] = []; 

  submitForm() {
    this.fetchInterviewQuestions(this.formData.city, this.formData.position, this.formData.experience);
    this.submitted = true;
  }

  fetchInterviewQuestions(city: string, position: string, experience: string) {
   
    if (city === 'madurai' && position === 'Frontend Developer' && experience === 'Intermediate') {
      this.interviewQuestions = [
        '1 which command used to create component in angular : ng g c name ',
        '2 what are two types of forms: template, reactive'
      ];
    }if (city === 'chennai' && position === 'Frontend Developer' && experience === 'Intermediate') {
      this.interviewQuestions = [
        '1 what does mern stands for-: mongo, react, express,node',
        '2 how we can import the css : style shet t, wirting in same tag'
      ];
    } 
    else if (city === 'chennai' && position === 'Backend Developer' && experience === 'Senior') {
      this.interviewQuestions = [
        'what library used to import images: image',
        'basic model for image classification :CNN'
      ];
    }else if (city === 'madurai' && position === 'Backend Developer' && experience === 'Senior') {
      this.interviewQuestions = [
        'what library used to work with arrays: numpy',
        'basic concept for object detection: anchor box'
      ];
    } 
    else {
      this.interviewQuestions = ['No interview questions found for the selected criteria'];
    }
  }
}
