class Phone {
constructor(name, company, operatingSystem, screen, price, battery, color ){
    this.name = name;
    this.company = company;
    this.operatingSystem = operatingSystem;
    this.screen = screen;
    this.price = price;
    this.battery = battery;
    this.color = color;
}

    info(){
        return `${this.company} ${this.name} ${this.color}`
    }

    credit_month_4(){
        let credit_price = this.price * (4/100);
        let months = 4;
        let total_price = credit_price * months + this.price;
        return `Загальна ціна після чотирох місячів кредиту - ${total_price}`
    }

    credit_month_6(){
        let credit_price = this.price * (5/100);
        let months = 6;
        let total_price = credit_price * months + this.price;
        return `Загальна ціна після шести місячів кредиту - ${total_price}`
    }

    credit_month_12(){
        let credit_price = this.price * (6/100);
        let months = 12;
        let total_price = credit_price * months + this.price;
        return `Загальна ціна після двянадцяти місячів кредиту - ${total_price}`
    }
}

let phone1 = new Phone("Iphone12" ,'Aplle', 'ios', 5, 50000, 2500, 'black')

let phones = [phone1];

function addPhone(){
    let new_phone = new Phone(
        document.getElementById('name').value,
        document.getElementById('company').value,
        document.getElementById('operation system').value,
        document.getElementById('screen').value,
        document.getElementById('price').value,
        document.getElementById('battery').value,
        document.getElementById('color').value
    )
    phones.push(new_phone)
    drawPhones()
    console.log(phones)
}

function drawPhones(){
 let phones_table = document.getElementById('phones_table')
 phones_table.innerHTML = ''
  phones.forEach(function(phone){
    phones_table.innerHTML += `
    <tr>
    <th scope='row'></th>
        <td>${phone.name}</td>
        <td>${phone.company}</td>
        <td>${phone.operatingSystem}</td>
        <td>${phone.screen}</td>
        <td>${phone.price}</td>
        <td>${phone.battery}</td>
        <td>${phone.color}</td>
        <td>
            <button class="btn btn-sm btn-primary" onclick='alert("${phone.info()}")'>
            Головна інформація
            </button>
        </td>
        <td>
            <button class="btn btn-sm btn-primary" onclick='alert("${phone.credit_month_4}")'>
            4 місяці
            </button>
        </td>
        <td>
            <button class="btn btn-sm btn-primary" onclick='alert("${phone.credit_month_6}")'>
            6 місяців
            </button>
        </td>
        <td>
            <button class="btn btn-sm btn-primary" onclick='alert("${phone.credit_month_12}")'>
            12 місяців
            </button>
        </td>




    </tr>
     `
  })
}
drawPhones()