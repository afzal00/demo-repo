import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userLists: any[];
  constructor(
    private dbService: DbServiceService,
    private router: Router
  ) {
    this.userLists = [];
  }

  ngOnInit(): void {
    this.getUserList();
  }
  private getUserList() {
    this.dbService.getUserList().subscribe((userList: any[]) => {
      this.userLists = userList;
    });
  }

  public onEdit(id: number) {
    this.router.navigate(['./user-from/' + id]);
  }
  public onDelete(id: number) {
    this.dbService.deleteUserDetails(id).subscribe(
      () => {
        this.getUserList();
      }
    );
  }
}
