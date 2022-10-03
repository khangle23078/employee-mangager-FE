import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-custom',
  templateUrl: './modal-custom.component.html',
  styleUrls: ['./modal-custom.component.scss']
})
export class ModalCustomComponent implements OnInit {
  @Input() title = "";
  @Input() type = "";

  constructor() { }

  ngOnInit(): void {
  }

}
