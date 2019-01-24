import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Icon } from '../models/icon';

@Component({
  selector: 'app-custom-icon',
  templateUrl: './custom-icon.component.html',
  styleUrls: ['./custom-icon.component.css']
})
export class CustomIconComponent implements OnInit {
  @Input() icon: Icon;
  @ViewChild('iconData') iconData: ElementRef;
  iconWidth = 60;
  iconHeight = 60;
  
  constructor() { }

  ngOnInit() {
    this.loadSvgdata();
    this.setIconSize();
  }

  loadSvgdata() {
    this.iconData.nativeElement.innerHTML = this.icon.data;
  }

  setIconSize() {
    this.iconData.nativeElement.firstChild.setAttribute('width', this.iconWidth);
    this.iconData.nativeElement.firstChild.setAttribute('height', this.iconHeight);
  }

}
