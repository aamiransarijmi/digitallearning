import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-snake-bar',
  templateUrl: './snake-bar.component.html',
  styleUrls: ['./snake-bar.component.scss'],
})
export class SnakeBarComponent implements OnInit {
  constructor(public appService: AppService) {}

  ngOnInit(): void {}
}
