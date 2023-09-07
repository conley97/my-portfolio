import { Component, OnInit } from '@angular/core';

declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    particlesJS('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
  }

  title = 'Conley DeLeon Portfolio';
}
