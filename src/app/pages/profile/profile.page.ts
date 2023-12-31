import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/UserModel';
import { Router, RouterLinkWithHref, } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {

  userInfo$: Observable<UserModel> = new Observable<UserModel>();
  user_id: string;

  constructor(private router: Router, private _userService: UserService) {
      this.user_id = this.router.getCurrentNavigation()?.extras.state?.['userInfo'];
  }

  ngOnInit() {
      this.userInfo$ = this._userService.getUser(this.user_id);
  }

  navigateToUserTypeMenu() {
    this.router.navigateByUrl('/user-type-menu');
  }
}