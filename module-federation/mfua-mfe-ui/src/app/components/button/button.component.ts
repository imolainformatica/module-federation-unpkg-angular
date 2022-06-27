import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mfua-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() link: string = '/';

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
