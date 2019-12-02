import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private t:HttpClient ) { }

  update:any;
  create:any;

display(){
 return this.t.get('http://localhost:3000/details');
}


display2(c){
  return this.t.post('http://localhost:3000/details/',c);
 }


 display3(c){
  return this.t.put('http://localhost:3000/details/'+ c.id,c);
 }

 display4(c){
  return this.t.delete('http://localhost:3000/details/'+c.id);
 }

}
