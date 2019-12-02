import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss']
})
export class AuthPage {

  authEmployeList =  []
  employe  = {matricule : "", password : ""}

  constructor(private authService : AuthService, private route:Router) {
    for(let i=0; i<100;i++){
      this.authEmployeList[i]={ matricule : String(i)+"P0"+String(100-i), password : 'lenyat'+String(i)}
    }
  
  }
  
  logForm() {
    let isInListEmp = this.authEmployeList.find( (emp) => emp.matricule === this.employe.matricule && emp.password === this.employe.password)
    if(isInListEmp){
      this.authService.signIn().then(() => {
        this.route.navigate(["/"])
      })
      console.log(this.authService.isAuth)
    }
  }

}
