import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { DeleteUsersComponent } from './delete-users.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';

describe('DeleteUsersComponent', () => {
  let component: DeleteUsersComponent;
  let fixture: ComponentFixture<DeleteUsersComponent>;
  let mockActivatedRoute: any;
  let mockUserService: any;
  let mockSnackBar: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      params: of({id: '1'})
    };
    mockUserService = jasmine.createSpyObj('UserService', ['deleteUser']);
    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ DeleteUsersComponent ],
      imports: [MatCardModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: UserService, useValue: mockUserService },
        { provide: MatSnackBar, useValue: mockSnackBar }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUsersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete user successfully', fakeAsync(() => {
    const deleteUserResponse = { success: true, message: 'User deleted successfully' };
    mockUserService.deleteUser.and.returnValue(of(deleteUserResponse));
    
    fixture.detectChanges();
    tick();

    expect(mockUserService.deleteUser).toHaveBeenCalledWith('1');
    expect(mockSnackBar.open).toHaveBeenCalledWith('User deleted successfully');
  }));
});
