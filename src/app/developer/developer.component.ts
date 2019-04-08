import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../commun/developer.model';
import { Skill } from '../commun/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer = new Developer ('Cyprien', 'De Roef', 25, 'Male', 'Coucou', [
    new Skill ('Angular', 'www.angular.io'),
    new Skill ('Java', 'www.java.com')
    ]);

  constructor() {}

  ngOnInit() {}
}
