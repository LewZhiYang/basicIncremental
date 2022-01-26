

function main() {
    update()
    save()
}

function update() {
    let g = data.generators
    interval = (Date.now() - data.lastUpdate) / 1000
    data.lastUpdate = Date.now()
    for (let i=0; i<10; i++) {
        if (i != 0) {
            data.generators[i -1].amt += g[i].amt * interval
            document.getElementById(`dim${i + 1}production`).textContent = `Produces ${formatNumber(data.generators[i].amt)} dim${i}/s`
        } else {
            data.money += g[i].amt * interval
            document.getElementById(`dim${i + 1}production`).textContent = `Produces ${formatNumber(data.generators[i].amt)} money/s`
        }
        document.getElementById(`dim${i + 1}amt`).textContent = `You have ${formatNumber(data.generators[i].amt)}`        
        document.getElementById(`btn${i + 1}`).textContent = `Buy 1 (Cost:  ${formatNumber(data.generators[i].cost)})`
    }

    document.getElementById('moneyAmt').textContent = `Money: ${formatNumber(data.money)}`

}

function save() {
    localStorage.setItem('data', JSON.stringify(data))
}

function load() {
    if (localStorage.getItem('data') == null) {
        console.log("hi")
        initialise()
    } else {
        data = JSON.parse(localStorage.getItem('data'))
    }
}

function initialise() {
    data = {
        generators: [],
        lastUpdate: Date.now(),
        money: 10
    } 
    for (let i=0; i<10; i++) {
        console.log('hi')
        data.generators[i] = {
            cost: Math.pow(10, 2 * i + 1),
            amt: 0
        }
    }
}

function buy(i) {
    if (data.money >= data.generators[i - 1].cost){
        data.generators[i - 1].amt += 1
        data.money -= data.generators[i - 1].cost
        data.generators[i - 1].cost *= (i + 1)
    }
}

function formatNumber(number) {
    if (number < 1000) {
        return Math.round(number)
    } else {
        return number.toExponential(3)
    }
}