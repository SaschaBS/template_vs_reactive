using `@Input() hobby: Hobby;` directly in the component won't work with two way binding.
it doesn't matter what you type in the input boxes `hobby` property won't be updated.
you need to copy the input to a new property of the component, so that angular can do the
two way binding.

using `this.hobbyAdded.emit(this.hobby);` and emitting the instance property is bad
because the changes in the input boxes bind directly to the list element and there get updated.
you need to emit a copy, so that `this.hobby` is immutable. `    const newHobby: Hobby = {...this.hobby};`
 
