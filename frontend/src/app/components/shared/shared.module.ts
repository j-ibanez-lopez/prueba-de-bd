import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
// b
import { MatButtonModule } from '@angular/material/button';
// c
import { MatCardModule } from '@angular/material/card';
// d
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker'
// f
import { MatFormFieldModule } from '@angular/material/form-field';
// i
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
// n
import { MatNativeDateModule } from '@angular/material/core';
// p
import { MatPaginatorModule } from '@angular/material/paginator';
// s
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
// t
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Fin Angular Material

import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    // Angular Material
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],

  exports: [
    HttpClientModule,
    // Material
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSliderModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,

    ReactiveFormsModule
  ]

})
export class SharedModule { }
