import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConsoleService } from '../../shared/services/console.service';
import { isEmbeddedView } from '@angular/core/src/view/util';

@Component({
  selector: 'app-simple-svg',
  templateUrl: './simple-svg.component.html',
  styleUrls: ['./simple-svg.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleSvgComponent implements OnInit {
  constructor(private console: ConsoleService) { }

  hovered: boolean = false;

  ngOnInit() {
  }

  mouseOver(event: any, isEntering: boolean) {
    if (isEntering) this.console.logWithMessage("entering", event);
    else this.console.logWithMessage("leaving", event);

    this.hovered = isEntering;
  }
}
