import {Component} from '@angular/core';
import {Hobby} from './models/Hobby';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  hobbies: Hobby[] = [{name: 'Fussball', description: 'a very manly sport', experience: 1}];

  addHobby(hobby: Hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(h: string) {
    this.hobbies = this.hobbies.filter(hobby => h !== hobby.name);
  }

  loadHobby(): Hobby {
    return {
      description: 'A nice sport for old people',
      experience: 2,
      name: 'Tennis'
    };
  }
}
