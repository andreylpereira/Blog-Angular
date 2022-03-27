import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
/* Services */
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public registerForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
  });

  register() {
    let user = {
      email: this.registerForm.get('email')?.value,
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      password: this.registerForm.get('password')?.value,
    };
    if (this.registerForm.valid) {
      this.registerService.register(user);
    } else {
      this.toastr.error('Os campos foram preenchidos incorretamente.', 'Erro!', {
        timeOut: 2000,
      });
    }
    this.registerForm.reset();
  }
}
