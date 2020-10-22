import { Component, OnInit, Input } from '@angular/core';
import { ICloth } from '../../shared/interfaces/cloth.interface';

@Component({
  selector: 'app-topic-block',
  templateUrl: './topic-block.component.html',
  styleUrls: ['./topic-block.component.scss']
})
export class TopicBlockComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  constructor() { }

  ngOnInit(): void {
  }

}
