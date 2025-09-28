// category-page.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-page.html',
  styleUrls: ['./category-page.css']
})
export class CategoryPage {
  categories = [
    {
      name: 'Milk & Coconut Water',
      img: 'https://cdn.pixabay.com/photo/2024/04/05/07/12/coconut-8676744_1280.jpg',
      varieties: [
        { name: 'Cow Milk', qty: '1L Pack', img: 'https://cdn.pixabay.com/photo/2019/08/11/12/15/cow-4398868_1280.jpg', desc: 'Fresh cow milk rich in calcium for strong bones.' },
        { name: 'Buffalo Milk', qty: '1L Pack', img: 'https://cdn.pixabay.com/photo/2013/02/24/14/31/water-buffalo-85662_1280.jpg', desc: 'Thick creamy buffalo milk for ghee & sweets.' },
        { name: 'Low Fat Cow Milk', qty: '1L Pack', img: 'https://cdn.pixabay.com/photo/2017/06/17/10/41/low-fat-2411820_1280.png', desc: 'Healthy choice with less fat, same nutrition.' },
        { name: 'Tender Coconut Water', qty: '500ml', img: 'https://cdn.pixabay.com/photo/2024/02/24/23/18/ai-generated-8594906_1280.jpg', desc: 'Naturally refreshing drink for hydration.' }
      ]
    },
    {
      name: 'Fresh Vegetables',
      img: 'https://cdn.pixabay.com/photo/2017/11/06/17/05/vegetable-2924245_1280.jpg',
      varieties: [
        { name: 'Bottle Gourd (Lauki)', qty: '450 gm', img: 'https://cdn.pixabay.com/photo/2016/08/18/21/03/pumpkin-1603922_1280.jpg', desc: 'Light, hydrating & nutritious vegetable.' },
        { name: 'Carrot (Red)', qty: '450 gm', img: 'https://cdn.pixabay.com/photo/2016/09/25/16/34/carrots-1694087_1280.jpg', desc: 'Sweet crunchy carrots rich in Vitamin A.' },
        { name: 'French Beans', qty: '225 gm', img: 'https://media.istockphoto.com/id/184329392/photo/close-up-of-a-bunch-of-green-beans.webp?b=1&s=612x612&w=0&k=20&c=hvyw-e7GPXy0pVkVOOe8jba3VQw4XR2ql8dJmXtF1oo=', desc: 'Fresh beans, perfect for curries & stir-fry.' },
        { name: 'Spinach (Palak)', qty: '250 gm', img: 'https://media.istockphoto.com/id/1006196472/photo/bunch-of-spinach-leaves-on-isolated-white-background.webp?b=1&s=612x612&w=0&k=20&c=PqyX9MepS6fbQ0-xR6P6H29KWpMsUd5qpSZ-9Z1fo3w=', desc: 'Leafy green rich in iron & vitamins.' }
      ]
    },
    {
      name: 'Fresh Fruits',
      img: 'https://cdn.pixabay.com/photo/2016/07/03/23/18/raspberries-1495713_1280.jpg',
      varieties: [
        { name: 'Apple', qty: '1kg', img: 'https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_1280.jpg', desc: 'Crisp and juicy apples full of fiber.' },
        { name: 'Mango', qty: '1kg', img: 'https://cdn.pixabay.com/photo/2017/05/31/14/31/mango-2360551_1280.jpg', desc: 'The king of fruits, juicy & sweet.' },
        { name: 'Orange', qty: '1kg', img: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg', desc: 'Vitamin C rich juicy oranges.' },
        { name: 'Kiwi', qty: '500 gm', img: 'https://cdn.pixabay.com/photo/2016/11/11/14/42/kiwi-1816977_1280.jpg', desc: 'Exotic fruit packed with Vitamin C.' }
      ]
    },
    {
      name: 'Milk Products',
      img: 'https://cdn.pixabay.com/photo/2022/08/23/07/20/almonds-7405204_1280.jpg',
      varieties: [
        { name: 'Paneer', qty: '200 gm', img: 'https://cdn.pixabay.com/photo/2022/03/02/12/42/paneer-7043099_1280.jpg', desc: 'Fresh soft paneer for curries & snacks.' },
        { name: 'Curd', qty: '500 gm', img: 'https://cdn.pixabay.com/photo/2021/01/31/13/10/tofu-5966853_1280.jpg', desc: 'Homemade-style curd, thick & creamy.' },
        { name: 'Butter', qty: '100 gm', img: 'https://cdn.pixabay.com/photo/2018/05/18/12/55/butter-3411126_1280.jpg', desc: 'Rich creamy butter from cow’s milk.' },
        { name: 'Cheese Slices', qty: '200 gm', img: 'https://cdn.pixabay.com/photo/2016/04/15/17/19/open-sandwich-1331447_1280.jpg', desc: 'Perfect for sandwiches & pizzas.' }
      ]
    }
  ];

  selectedCategory = this.categories[0];

  // Track quantities for each item
  itemQuantities: { [key: string]: number } = {};

  constructor(private cartService: CartService) {}

  increaseQuantity(itemName: string) {
    if (!this.itemQuantities[itemName]) {
      this.itemQuantities[itemName] = 1;
    } else {
      this.itemQuantities[itemName]++;
    }
  }

  decreaseQuantity(itemName: string) {
    if (this.itemQuantities[itemName] > 1) {
      this.itemQuantities[itemName]--;
    }
  }

  addToCart(item: any) {
    const quantity = this.itemQuantities[item.name] || 1;
    this.cartService.addItem({ ...item, quantity });
    alert(`${quantity} x ${item.name} added to cart!`);
    this.itemQuantities[item.name] = 0; // reset quantity
  }
}