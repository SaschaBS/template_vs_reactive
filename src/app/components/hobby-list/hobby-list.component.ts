import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hobby} from '../../models/Hobby';

@Component({
  selector: 'app-hobby-list',
  templateUrl: './hobby-list.component.html',
  styleUrls: ['./hobby-list.component.sass']
})
export class HobbyListComponent implements OnInit {

  @Input() hobbies: Hobby[];

  @Output() hobbyClicked = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onHobbyClicked(hobby) {
    this.hobbyClicked.emit(hobby);
  }

  getBgCol() {
    return this.hobbies.length > 3 ? 'red' : 'blue';
  }
}
