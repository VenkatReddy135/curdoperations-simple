import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'today23';  
  details;
  details2;
  show:boolean;


constructor(private ht: AppService, private ar:FormBuilder){
  this.dis();
}

myform=this.ar.group({
  id:['',],
  name:['',],
  location:['',],
  })

  edit(m){
    this.myform.setValue({
      id:m.id,
      name:m.name,
      location:m.location, 
    })
  }

  view(m){
    this.show=true;
    this.details2=m;
    }

hide()
{
  this.show=false;
}


dis(){
  this.ht.display().subscribe( response => { console.log(response);
    this.details=response;
    })
}

create(){
  this.ht.display2(this.myform.value).subscribe( response => this.dis());
  this.myform.reset();  
}

update(){
  this.ht.display3(this.myform.value).subscribe( response => this.dis());
  this.myform.reset();  
}

delete(x){
 if(confirm('Are you sure to delete..?'))
 {
  this.ht.display4(x).subscribe( response => this.dis());
  this.myform.reset(); 
 }
}



}
