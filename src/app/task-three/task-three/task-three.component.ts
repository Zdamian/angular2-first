import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.scss']
})
export class TaskThreeComponent implements OnInit {

  @Input() message;

  onUpdate(id, text) {
    this.sms.update(id, text);
  }

  constructor(
    @Inject('sms') private sms
  ) {}

  ngOnInit() {
  }

}
