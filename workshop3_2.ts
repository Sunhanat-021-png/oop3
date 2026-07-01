export{};
function calPrice(price: number, disc: number):number{
    return price-(price*disc/100);
}

const price1: number = 200;
let price2: number = 500;
console.log(`สินค้าราคา ${price1} บาท ราคาสุทธิหลังหักส่วนลด ${calPrice(price1,10)} บาท`);
console.log(`สินค้าราคา ${price2} บาท ราคาสุทธิหลังหักส่วนลด ${calPrice(price2,20)} บาท`);