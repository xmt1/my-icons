import { Component, OnInit } from '@angular/core';
import { IconService } from './icon.service';
import { Icon } from './models/icon';
import { AddIconDialogComponent } from './add-icon-dialog/add-icon-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  icons: Icon[];
  constructor(public dialog: MatDialog, private iconService: IconService) {}

  ngOnInit() {
    this.icons = this.iconService.getIcons();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddIconDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
