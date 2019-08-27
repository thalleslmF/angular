import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;
  errors= [];
  constructor(private data:DataService,private http:RestApiService,private router:Router) {
  
   }
   ngOnInit() {
  }
  async enviaForm(){
    console.log(this.validate());
    if(this.validate()){
      const data = await this.http.post('http://localhost:3000/login',{
        email: this.email,
        password : this.password,
      });
      if(data['success']){
        localStorage.setItem('user',data['user']);;
        localStorage.setItem('token',data['token']);
        
        this.router.navigate(['products']);
      }
      else{
        this.data.message = data['message'];
        this.data.typeMessage = 'danger';
      }
    }else{
     this.data.message = JSON.stringify(this.errors);
     this.data.typeMessage = 'danger';

    }
  }
  validate(){
    var validate = true;
    if (!this.email) {
      this.errors.push('Informe o email');
          validate =  false;
    }
    if(!this.password){
      this.errors.push('Informe a senha');
      validate=false;
    }
    return validate;
  }

}
