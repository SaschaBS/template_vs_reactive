import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hobby} from '../../models/Hobby';

@Component({
  selector: 'app-hobby-form',
  templateUrl: './hobby-form.component.html',
  styleUrls: ['./hobby-form.component.sass']
})
export class HobbyFormComponent implements OnInit {

  @Input() hobby2: Hobby;
  @Output() hobbyAdded = new EventEmitter<Hobby>();
  private hobby: Hobby;

  constructor() {
  }

  ngOnInit() {
    this.hobby = this.hobby2;
  }

  submitForm() {
    console.log(this.hobby);
    const newHobby: Hobby = {...this.hobby};
    this.hobbyAdded.emit(newHobby);
  }
}
