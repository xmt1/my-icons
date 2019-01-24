import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AppComponent } from '../app.component';
import { Icon } from '../models/icon';
import { IconService } from '../icon.service';

@Component({
  selector: 'app-add-icon-dialog',
  templateUrl: './add-icon-dialog.component.html',
  styleUrls: ['./add-icon-dialog.component.css']
})
export class AddIconDialogComponent implements OnInit {
  iconData = '';
  iconName = '';
  iconTags = '';
  @ViewChild('previewSvg') previewSvg: ElementRef;
  wasSubmitted = false;
  isSVG: boolean;
  constructor(
    private iconService: IconService,
    public dialogRef: MatDialogRef<AppComponent>) { }

  ngOnInit() {
    
  }

  onIconDataChange() {
    if (!this.checkIfSvg()) {
      this.isSVG = false;
      return;
    }
    this.isSVG = true;
    this.setPreviewIcon(60, 60);
  }

  setPreviewIcon(w: number, h: number) {
    this.previewSvg.nativeElement.innerHTML = this.iconData;
    this.previewSvg.nativeElement.firstChild.setAttribute('width', w);
    this.previewSvg.nativeElement.firstChild.setAttribute('height', h);
  }

  valueIsBlank(val: string) {
    return val.trim() === '';
  }

  onSubmit() {
    this.wasSubmitted = true;
    if (this.valueIsBlank(this.iconName)) {
      return;
    }
    // Icon isn't an SVG, don't add
    if (!this.isSVG) {
      return;
    }
    const splitTags = this.iconTags.split(", ");
    const icon: Icon = {
      id: this.iconService.getLastIconId(),
      name: this.iconName,
      tags: splitTags,
      data: this.iconData
    };
    this.iconService.addNewIcon(icon);
    this.dialogRef.close();
  }

  checkIfSvg() {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = this.iconData;
    return tempDiv.firstChild instanceof SVGElement;
  }

}
