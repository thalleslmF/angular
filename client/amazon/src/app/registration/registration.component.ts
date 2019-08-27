import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  password = '';
  password1 = '';
  name = '';
  email = '';
  btnDisabled = false;
  constructor(private router: Router, private data: DataService, private rest: RestApiService) { }

  ngOnInit() {
  }
  validate() {

    if (this.email) {
      if (this.name) {
        if (this.password) {

          if (this.password1 == this.password) {
            return true;
          } else {
            this.data.error('Senhas não conferem');
          }
        } else {
          this.data.error('Informe a senha');
        }


      } else {
        this.data.error('Informe o nome');
      }
    } else {
      this.data.error('Informe o email');
    }

  }
  async  enviaForm() {
    this.btnDisabled = true;
    if (this.validate()) {
      try {
        const data = await this.rest.post('http://localhost:3000/signup', {
          name: this.name,
          email: this.email,
          password: this.password,
        }
        );
        if (data['success']) {
          localStorage.setItem('token', data['token']);
          console.log(localStorage.getItem('token'));
          this.data.success('Usuário registrado com sucesso');
          this.router.navigate(['/login']);
        } else {
          this.data.error(data['message']);
        }
      } catch (error) {
        this.data.error(error['message']);
      }
      this.btnDisabled = false;
    }
  }
}
