import { Component, OnInit } from '@angular/core';
import { DeleteComponent } from 'app/acra/acra-shared/delete/delete.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-resource-centre',
  templateUrl: './resource-centre.component.html',
  styleUrls: ['./resource-centre.component.css']
})
export class ResourceCentreComponent implements OnInit {
  resourcedocs = [
    // {
    //   "name": "Reasons for Cessation of Officers",
    //   "desc": "This document contains the list of reasons for cessation of officers.",
    //   "filetype": "docx"
    // },
    {
      name: 'Position Master',
      desc:
        'This document contains the list of positions for each entity type.',
      filetype: 'docx'
    },
    {
      name: 'Company Type 2 and 3 Master',
      desc: 'This document contains the master codes for company type 2 and 3.',
      filetype: 'docx'
    },
    {
      name: 'Accounting Standards',
      desc:
        'This document contains the type of accounting standards used to prepare financial statements.',
      filetype: 'docx'
    },
    {
      name: 'User Guide',
      desc:
        'This document contains step by step instructions to users on the navigation and use of ACRA API Mall portal.',
      filetype: 'docx'
    }
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  deleteDialog() {
    const dialogRef = this.dialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
