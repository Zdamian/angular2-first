import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.scss']
})
export class TaskTwoComponent implements OnInit {

  @Input() message;

  onClick(val) {
    console.log(val);
  }

  constructor(@Inject('mail') private mail) { }

  ngOnInit() {
  }

}
