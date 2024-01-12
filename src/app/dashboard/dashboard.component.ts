import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatSort } from '@angular/material/sort';
import { User } from './dashboard.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('table', { static: true }) table?: MatTable<any>;
  displayedColumns: string[] = [
    'isSelected',
    'firstName',
    'email',
    'phone',
    'position',
  ];
  dragDisabled = true;
  userList: Array<any> = [];
  dataSourse!: MatTableDataSource<User>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public appService: AppService, private dialog: MatDialog) {
    this.dataSourse = new MatTableDataSource(this.userList);
  }

  ngAfterViewInit() {
    this.getUsers();
    this.dataSourse.sort = this.sort;
  }

  drop(event: any) {
    this.dragDisabled = true;
    const previousIndex = this.userList.findIndex((d) => d === event.item.data);
    moveItemInArray(this.userList, previousIndex, event.currentIndex);
    this.table?.renderRows();
  }

  getUsers() {
    this.appService.users().subscribe((users) => {
      this.userList = users.users;
      this.dataSourse = new MatTableDataSource(this.userList);
    });
  }

  isSelectedAny(): boolean {
    return this.userList.some((u: any) => u.isSelected);
  }

  deleteMultipleUser() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '312px',
      height: '95px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userList = this.userList.filter((u: any) => !u.isSelected);
        this.dataSourse = new MatTableDataSource(this.userList);
        this.appService.showSnake('Delete Successfully');
        setTimeout(() => {
          this.appService.closeSnake();
        }, 2000);
      }
    });
  }

  deleteSingleUser(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '312px',
      height: '95px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userList = this.userList.filter((u) => u.id !== id);
        this.dataSourse = new MatTableDataSource(this.userList);
        this.appService.showSnake('Delete Successfully');
        setTimeout(() => {
          this.appService.closeSnake();
        }, 2000);
      }
    });
  }
  onSort(event: any) {
    console.log(event);
    switch (event.direction) {
      case 'asc':
        this.userList = this.userList.sort((a: any, b: any) => {
          return a[event.active].localeCompare(b[event.active]);
        });
        break;
      case 'desc':
        this.userList = this.userList.sort((a: any, b: any) => {
          return b[event.active].localeCompare(a[event.active]);
        });
    }
    console.log(this.userList);
    this.dataSourse = new MatTableDataSource(this.userList);
  }
}
