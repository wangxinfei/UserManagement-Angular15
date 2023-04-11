import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListUsersComponent, User } from './list-users.component';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['listUsers']);

    await TestBed.configureTestingModule({
      declarations: [ ListUsersComponent ],
      providers: [
        { provide: UserService, useValue: userServiceSpy }
      ],
      imports: [
        MatCardModule,
        MatTableModule,
        RouterLink
      ]
    })
    .compileComponents();

    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a list of users', () => {
    const users: User[] = [
      { id: 1, name: 'John Doe', username: 'jdoe', email: 'jdoe@example.com' },
      { id: 2, name: 'Jane Smith', username: 'jsmith', email: 'jsmith@example.com' }
    ];

    userService.listUsers.and.returnValue(of(users));

    fixture.detectChanges();

    expect(component.listUsers).toEqual(users);
  });

  it('should get a empty list of users', () => {
    const users: User[] = [];

    userService.listUsers.and.returnValue(of(users));

    fixture.detectChanges();

    expect(component.listUsers).toEqual(users);
  });
});
