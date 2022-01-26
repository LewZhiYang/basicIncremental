

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
            document.getElementById(`dim${i + 1}amt`).textContent = `You have ${data.generators[i].amt}`
            document.getElementById(`dim${i + 1}production`).textContent = `Produces ${data.generators[i].amt} dim${i}/s`
        } else {
            data.money += g[i].amt * interval
            document.getElementById(`dim${i + 1}amt`).textContent = `You have ${data.generators[i].amt}`
            document.getElementById(`dim${i + 1}production`).textContent = `Produces ${data.generators[i].amt} money/s`
        }
    }

    document.getElementById('moneyAmt').textContent = `Money: ${data.money}`

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
    data.generators[i - 1].amt += 1
}

