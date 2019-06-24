import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Hobby} from '../../models/Hobby';

@Component({
  selector: 'app-hobby-form-reactive',
  templateUrl: './hobby-form-reactive.component.html',
  styleUrls: ['./hobby-form-reactive.component.sass']
})
export class HobbyFormReactiveComponent implements OnInit {

  @Input() hobby: Hobby;
  @Output() hobbyAdded = new EventEmitter<Hobby>();
  private hobbyForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.hobbyForm = this.fb.group(
      {
        name: [this.hobby.name],
        description: [this.hobby.description],
        experience: [this.hobby.experience]
      }
    );
  }

  submitForm() {
    console.log(this.hobby);
    const newHobby: Hobby = {
      name: this.hobbyForm.value.name,
      description: this.hobbyForm.value.description,
      experience: this.hobbyForm.value.experience,
    };
    this.hobbyAdded.emit(newHobby);
  }

}
