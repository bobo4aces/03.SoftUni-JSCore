function tickets(arr,criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let tickets = [];
    for (let el of arr) {
        let [destination, price, status] = el.split("|");
        let currentTicket = new Ticket(destination, price, status);
        tickets.push(currentTicket);
    }

    return tickets.sort((a,b) => a[criteria] > b[criteria]);
}
console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));
console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));
