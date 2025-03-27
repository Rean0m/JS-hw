const car = {
    carBrand: "Audi",
    carModel: "A4",
    carYear: 2007,
    carColor: "сірий",
    carInfo: function() {
        console.log(`Марка: ${this.carBrand}, Модель: ${this.carModel}, Рік: ${this.carYear}, Колір: ${this.carColor}`);
    }
};


const book = {
    name: "JavaScript for Kids",
    author: "Nick Morgan",
    pages: 372,
    bookInfo: function() {
        console.log(`Назва: ${this.name}, Автор: ${this.author}, Кількість сторінок: ${this.pages}`);
    }
};


const student = {
    firstName: "Srhii",
    lastName: "Rychkov",
    course: 5,
    studentInfo: function() {
        console.log(`Привіт, мене звати ${this.firstName} ${this.lastName},я навчаюся на ${this.course} курсі.`);
    }
};
car.carInfo();
book.bookInfo();
student.studentInfo();


