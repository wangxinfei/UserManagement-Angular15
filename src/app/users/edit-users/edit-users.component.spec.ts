import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { EditUsersComponent } from './edit-users.component';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

describe('EditUsersComponent', () => {
  let component: EditUsersComponent;
  let fixture: ComponentFixture<EditUsersComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUser']);

    await TestBed.configureTestingModule({
      declarations: [ EditUsersComponent ],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: ActivatedRoute, useValue: { params: of({ id: 1 }) } }
      ],
      imports: [ MatSnackBarModule, MatCardModule ]
    })
    .compileComponents();

    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the user', () => {
    expect(component).toBeTruthy();
  });

  // it('should update the user', () => {
  //   // Arrange
  //   const mockUserId = '1';
  //   const mockUserDetails = {
  //     name: 'John Doe',
  //     username: 'jdoe',
  //     email: 'jdoe@example.com',
  //     phone: '1234567890',
  //     address: {
  //       street: '123 Main St'
  //     }
  //   };
  //   const userServiceSpy = jasmine.createSpyObj('UserService', ['updateUser']);
  //   userServiceSpy.updateUser.and.returnValue(of(mockUserDetails));
  //   component.userId = mockUserId;
  //   component.userDetails = mockUserDetails;
  //   component.editUserForm.setValue({
  //     name: new FormControl('Jane Doe'),
  //     username: new FormControl('jane'),
  //     email: new FormControl('jane@example.com'),
  //     phone: new FormControl('0987654321'),
  //     address: {
  //       street: new FormControl('456 Elm St')
  //     }
  //   });
  
  //   // Act
  //   component.updateUser();
  //   tick();
  
  //   // Assert
  //   expect(userServiceSpy.updateUser).toHaveBeenCalledWith(mockUserId, component.editUserForm.value);
  // });
  
});
