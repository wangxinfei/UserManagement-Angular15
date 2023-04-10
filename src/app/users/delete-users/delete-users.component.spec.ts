import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteUsersComponent } from './delete-users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { BehaviorSubject, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

describe('DeleteUsersComponent', () => {
  let component: DeleteUsersComponent;
  let fixture: ComponentFixture<DeleteUsersComponent>;
  let userService: UserService;

  beforeEach(async () => {
    const paramMapSubject = new BehaviorSubject({ id: '1' });
    await TestBed.configureTestingModule({
      declarations: [ DeleteUsersComponent ],
      imports: [ HttpClientTestingModule, MatCardModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: paramMapSubject
          }
        },
        {
          provide: MatSnackBar,
          useValue: {
            open: () => {}
          }
        },
        UserService // add UserService to providers
      ]
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(DeleteUsersComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService); // inject UserService
    spyOn(userService, 'deleteUser').and.returnValue(of({})); // mock deleteUser method

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
