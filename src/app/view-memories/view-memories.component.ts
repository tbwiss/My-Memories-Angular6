import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewMemoriesDataSource, ViewMemoriesItem } from './view-memories-datasource';
import { Subscription } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-view-memories',
  templateUrl: './view-memories.component.html',
  styleUrls: ['./view-memories.component.scss']
})
export class ViewMemoriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewMemoriesDataSource;

  displayedColumns = ['date', 'text'];
  subscription: Subscription;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.dataSource = new ViewMemoriesDataSource(this.paginator, this.sort);
    this.subscription = this.db.list<ViewMemoriesItem>('memories').valueChanges().subscribe(d => {
      console.log('data streaming');
      this.dataSource = new ViewMemoriesDataSource(this.paginator, this.sort);
      this.dataSource.data = d;
    });
  }

  OnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
