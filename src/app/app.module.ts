import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule, 
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule
} from '@angular/material';
import { CustomIconComponent } from './custom-icon/custom-icon.component';
import { AddIconDialogComponent } from './add-icon-dialog/add-icon-dialog.component';
import { IconDetailDialogComponent } from './icon-detail-dialog/icon-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomIconComponent,
    AddIconDialogComponent,
    IconDetailDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ],
  entryComponents: [
    AddIconDialogComponent,
    IconDetailDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
