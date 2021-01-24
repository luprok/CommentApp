import { Component, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

export interface UsersData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  displayedColumns: string[] = ['created', 'text'];
  dataSource: any;
  public comment: Comment;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(public dialog: MatDialog, public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
    http.get<Comment[]>(baseUrl + 'api/comments').subscribe(result => {
      result.map(p =>
        p.created = moment(p.created).format('H:mm:ss, DD.MM.YYYY'));
      this.dataSource = result;
    }, error => console.error(error));
  }

  addComment(newComment) {
    this.comment = {
      text: newComment
    };
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.comment);
    this.http.post<Comment>(this.baseUrl + 'api/comments', body, { 'headers': headers }).subscribe(data => {
      data.created = moment(data.created).format('H:mm:ss, DD.MM.YYYY');
      this.dataSource.push(data);
      this.table.renderRows();
    }, error => {
        alert(error.error);
        console.error(error);
    })
  }
}


interface Comment {
  //id: string;
  text: string;
  created?: string;
}
