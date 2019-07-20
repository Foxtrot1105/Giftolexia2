import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  form: FormGroup;
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit() {}

  onDelete() {
    this.snackbar.open('Deleted Successfully', 'Singmelody', {
      duration: 2000
    });
  }
}
