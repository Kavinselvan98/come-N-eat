import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }
  getMenuId:any;
  menuData:any;
  price : string="";
  
  Selectqun: string ="";

  Quantity = ['500g','1kg','2kg','5kg'];

  Price = ['Rs 300','Rs 450','Rs 600','Rs 800'];



  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData = this.service.foodDetails.filter((value)=>{
        return value.id == this.getMenuId;   
      });
      console.log(this.menuData,'menudata>>');
    }
  }

  loadPrice()
  {
    for(let index=0; index < this.Quantity.length; index++)
    {
      if(this.Quantity[index] == this.Selectqun)
      {
          this.price = this.Price[index];
          break;
      }
    }
  }

}
