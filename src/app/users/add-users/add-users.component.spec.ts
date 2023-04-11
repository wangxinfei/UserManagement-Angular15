import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUsersComponent } from './add-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'; // import MatCardModule
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from 'src/app/services/user.service';


describe('AddUsersComponent', () => {
  let component: AddUsersComponent;
  let fixture: ComponentFixture<AddUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsersComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatCardModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate the form when form fields are empty', () => {
    expect(component.addUserForm.valid).toBeFalsy();
  });

  it('should validate the form when form fields are filled', () => {
    component.addUserForm.controls['name'].setValue('John Doe');
    component.addUserForm.controls['username'].setValue('John Doe');
    component.addUserForm.controls['email'].setValue('john@example.com');
    component.addUserForm.controls['phone'].setValue('1234567890');
    component.addUserForm.controls['address.street'].setValue('1234567890');
    expect(component.addUserForm.valid).toBeTruthy();
  });
  
  
  it('should not submit the form when form is invalid', () => {
    const userService = TestBed.inject(UserService);
    spyOn(userService, 'addUser').and.callThrough();
  
    component.addUserForm.controls['name'].setValue('John Doe');
    component.addUserForm.controls['username'].setValue('John Doe');
    component.addUserForm.controls['email'].setValue('');
    component.addUserForm.controls['phone'].setValue('1234567890');
  
    component.ngOnInit();
  
    expect(userService.addUser).not.toHaveBeenCalled();
  });
  
});
