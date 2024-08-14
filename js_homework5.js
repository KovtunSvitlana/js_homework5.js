var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function() {
        let total = 0;
        for (let key in this) {
            if (typeof this[key] === "string" && this[key].includes("грн")) {
                total += parseInt(this[key]);
            }
        }
        return total + " грн";
    },
    minPrice: function() {
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] === "string" && this[key].includes("грн")) {
                let value = parseInt(this[key]);
                if (value < min) {
                    min = value;
                }
            }
        }
        return min + " грн";
    },
    maxPrice: function() {
        let max = -Infinity;
        for (let key in this) {
            if (typeof this[key] === "string" && this[key].includes("грн")) {
                let value = parseInt(this[key]);
                if (value > max) {
                    max = value;
                }
            }
        }
        return max + " грн";
    }
};

// Додаємо нову послугу
services['масаж голови'] = "200 грн";

console.log("Загальна вартість:", services.price()); // Загальна вартість всіх послуг
console.log("Мінімальна вартість:", services.minPrice()); // Мінімальна вартість послуги
console.log("Максимальна вартість:", services.maxPrice()); // Максимальна вартість послуги
