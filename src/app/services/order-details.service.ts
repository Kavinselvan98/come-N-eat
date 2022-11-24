import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Black Forest",
      foodDetails:"Layers of desadent,moist chocolate fudge cake layered with fluffy cream and delectable chocolate cherry filling,topped with chocolates and cherries",
      foodPrice: 350,
      foodImg:"https://bakewithshivesh.com/wp-content/uploads/2021/05/IMG_9384-scaled.jpg"
    },
    {
      id:2,
      foodName:"Rocky Road",
      foodDetails:"Layers of desadent,moist chocolate fudge cake layered with fluffy cream and delectable chocolate cherry filling,topped with chocolates and cherries",
      foodPrice: 400,
      foodImg:"https://cakebycourtney.com/wp-content/uploads/2017/01/Rocky-Road-Cake-7-e1547088251718.jpg"
    },
    {
      id:3,
      foodName:"Ube Bloom",
      foodDetails:"Layers of desadent,moist chocolate fudge cake layered with fluffy cream and delectable chocolate cherry filling,topped with chocolates and cherries",
      foodPrice: 300,
      foodImg:"https://www.redribbonbakeshop.com.ph/wp-content/uploads/2019/03/ube-bloom.png"
    },
    {
      id:4,
      foodName:"Peach Mango Symphony",
      foodDetails:"Layers of desadent,moist chocolate fudge cake layered with fluffy cream and delectable chocolate cherry filling,topped with chocolates and cherries",
      foodPrice: 450,
      foodImg:"https://1.bp.blogspot.com/-Mjan6QJzj1A/Why9vvSizdI/AAAAAAAAfjk/69X3ED063ZwuiJq2xe-6O-ancjarOJqUgCLcBGAs/s1600/DSCF5513.JPG"
    },
    {
      id:5,
      foodName:"Cappuccino Creme",
      foodDetails:"Layers of desadent,moist chocolate fudge cake layered with fluffy cream and delectable chocolate cherry filling,topped with chocolates and cherries",
      foodPrice: 500,
      foodImg:"https://4.bp.blogspot.com/-tanmLHs3Yrw/WiilqV7TXyI/AAAAAAABS7I/JNDJeI1_dhk8iRZteBrIwP9qKEOS-4cDgCLcBGAs/s1600/IMG_6722.jpg"
    },
    {
      id:6,
      foodName:"Caramel Crunch",
      foodDetails:"Layers of desadent,moist chocolate fudge cake layered with fluffy cream and delectable chocolate cherry filling,topped with chocolates and cherries",
      foodPrice: 300,
      foodImg:"https://www.mashed.com/img/gallery/easy-salted-caramel-vanilla-crunch-cake-recipe/l-intro-1623682796.jpg"
    },
    {
      id:7,
      foodName:"Red Velvette",
      foodDetails:"Layers of desadent,moist chocolate fudge cake layered with fluffy cream and delectable chocolate cherry filling,topped with chocolates and cherries",
      foodPrice: 600,
      foodImg:"https://www.fnp.com/images/pr/x/v20210701022516/red-velvet-heart-cake-1kg_1.jpg"
    },
  ];


  
}
