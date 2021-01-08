import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public profileForm: FormGroup;
  private userId: number | null;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dbService: DbServiceService,
    private route: ActivatedRoute
  ) {
    this.userId = 0;
    this.profileForm = this.formBuilder.group({
      name: [''],
      gender: [''],
      city: [''],
      state: [''],
      phoneNumber: [''],
      zipCode: ['']

    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((queryparam) => {
      this.userId = queryparam.get('id') ? queryparam.get('id') : 0;
      console.log('queryparam----', queryparam.get('id'));
      this.profileForm.reset();
      if (this.userId) {
        this.dbService.getSingleUser(this.userId).subscribe((singleUserDetails) => {
          this.profileForm.patchValue(singleUserDetails);
        });
      }
    });
  }

  public onSubmit() {
    if (this.userId) {

      this.dbService.updateUserDetails(this.userId, this.profileForm.value).subscribe(() => {
        console.log('this.profileForm---',);
        this.profileForm.reset();
        // this.router.navigate();
        this.goToUserList();
      });
    } else {
      this.dbService.saveUserDetails(this.profileForm.value).subscribe(() => {
        console.log('this.profileForm---',);
        this.profileForm.reset();
        // this.router.navigate();
        this.goToUserList();
      });
    }

  }
  public goToUserList() {
    this.router.navigate(['./user-list']);
  }
  public clearForm() {
    this.profileForm.reset();
  }
}
