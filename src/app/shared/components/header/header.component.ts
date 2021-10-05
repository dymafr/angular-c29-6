import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() public isLoggedin!: boolean | null;
  @Output() public logout: EventEmitter<true> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
