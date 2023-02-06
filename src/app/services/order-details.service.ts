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
      foodDetails:"Black Forest gâteau or Black Forest cake (American English) is a chocolate sponge cake with a rich cherry filling based on the German dessert Schwarzwälder Kirschtorte",
      foodPrice: 350,
      foodImg:"https://bakewithshivesh.com/wp-content/uploads/2021/05/IMG_9384-scaled.jpg"
    },
    {
      id:2,
      foodName:"Rocky Road",
      foodDetails:"Fluffy marshmallows, crunchy nuts, and chunks of biscuits coated in melted chocolate it's as simple as that.",
      foodPrice: 400,
      foodImg:"https://cakebycourtney.com/wp-content/uploads/2017/01/Rocky-Road-Cake-7-e1547088251718.jpg"
    },
    {
      id:3,
      foodName:"Ube Bloom",
      foodDetails:"It is typically made with flour, eggs, sugar, a dash of salt, baking powder, vanilla, oil, milk, and cream of tartar.",
      foodPrice: 300,
      foodImg:"https://www.redribbonbakeshop.com.ph/wp-content/uploads/2019/03/ube-bloom.png"
    },
    {
      id:4,
      foodName:"Peach Mango Symphony",
      foodDetails:"A delicious combination of peach, mango and cheese, our Peach Mango Symphony is the perfect cake to bring to Sunday brunch.",
      foodPrice: 450,
      foodImg:"https://1.bp.blogspot.com/-Mjan6QJzj1A/Why9vvSizdI/AAAAAAAAfjk/69X3ED063ZwuiJq2xe-6O-ancjarOJqUgCLcBGAs/s1600/DSCF5513.JPG"
    },
    {
      id:5,
      foodName:"Cappuccino Creme",
      foodDetails:"A coffee cake with coffee liquor cream filling layered between fluffy chocolate and mocha chiffon cakes. It is wrapped in milk chocolate cream, garnished with cocoa powder and accented with a beautiful flower.",
      foodPrice: 500,
      foodImg:"https://4.bp.blogspot.com/-tanmLHs3Yrw/WiilqV7TXyI/AAAAAAABS7I/JNDJeI1_dhk8iRZteBrIwP9qKEOS-4cDgCLcBGAs/s1600/IMG_6722.jpg"
    },
    {
      id:6,
      foodName:"Caramel Crunch",
      foodDetails:"The Original! Two toasted layers of pecan meringue are sandwiched between alternating layers of smooth, buttery caramel and fresh 35% whipped cream.",
      foodPrice: 300,
      foodImg:"https://www.mashed.com/img/gallery/easy-salted-caramel-vanilla-crunch-cake-recipe/l-intro-1623682796.jpg"
    },
    {
      id:7,
      foodName:"Red Velvette",
      foodDetails:"Red velvet cake is a vanilla cake with a few tablespoons of cocoa powder and red food coloring mixed in. Vinegar and buttermilk bring some acid to the batter, adding a bit of tanginess that balances out the sweet cream cheese-butter frosting that is standard.",
      foodPrice: 600,
      foodImg:"https://www.fnp.com/images/pr/x/v20210701022516/red-velvet-heart-cake-1kg_1.jpg"
    },
  ];


  
}
