import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Streaming Service Recommendations',
      image: '/assets/StreamingExample2.png',
      description: 'Description of Project 1 Description of Project 1Description of Project 1Description of Project 1',
      githubLink: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Portfolio Site',
      image: '/assets/portfolio.png',
      description: 'Description of Project 2',
      githubLink: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Candy Crush Styled Game',
      image: '/assets/game.png',
      description: 'Description of Project 2',
      githubLink: 'https://github.com/yourusername/project2'
    }
  ];
}
