import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.pug',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
