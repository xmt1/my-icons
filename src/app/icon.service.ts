import { Injectable } from '@angular/core';
import { Icon } from './models/icon';
import { MY_ICONS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  myIcons: Icon[] = MY_ICONS;
  constructor() { }

  getIcons() {
    return this.myIcons;
  }

  getLastIconId() {
    const lastIcon = MY_ICONS[MY_ICONS.length - 1];
    const id = lastIcon.id + 1;
    return id;
  }

  addNewIcon(icon: Icon) {
    MY_ICONS.push(icon);
    console.log(MY_ICONS);
  }

}
