import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() color: string = '';
  @Input() title: string = '';
  @Input() data: string = '';
  @Input() icon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
