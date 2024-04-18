import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodeENT, CrudService, Res } from '../../../service/crud.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit{
  resdata!:Res;
  setValue:CodeENT={
    code:""
  }
  issubmitted:boolean=false
  constructor(private crud: CrudService){}
  ngOnInit(): void {
  }
  post(data:CodeENT){
    this.crud.post(data).subscribe({
      next: (see)=>{
        this.resdata=see;
        alert(this.resdata);
        this.issubmitted=true
        console.log(see)
      },
      error: (err)=>{
        this.resdata=err
        this.resdata=err;

      }
    });
  
  }
  start(){
    this.post(this.setValue);
  }
}
