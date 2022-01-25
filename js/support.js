

function main() {
    update()
    save()
}

function update() {
    g = data.generators
    interval = (Date.now() - data.lastUpdate) / 1000
    data.lastUpdate = Date.now()
    for (let i=0; i<10; i++) {
        if (i != 0) {
            g[i].amt += g[i - 1].amt * g[i - 1].multiplier * interval
            document.getElementById(`dim${i + 1}amt`).textContent = `You have ${data.generators[i].amt}`
            document.getElementById(`dim${i + 1}production`).textContent = `Produces ${data.generators[i].amt} dim${i}/s`
        } else {
            data.money +=g[i].amt * g[i].multiplier * interval
            document.getElementById(`dim${i + 1}amt`).textContent = `You have ${data.generators[i].amt}`
            document.getElementById(`dim${i + 1}production`).textContent = `Produces ${data.generators[i].amt} money/s`
        }
    }

    for (let i=0; i<10; i++) {


    }
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
    
    console.log('hi')
    data = {
        generators: [],
        lastUpdate: Date.now(),
        money: 10
    } 
    console.log('hi')
    
    for (let i=0; i<10; i++) {
        console.log('hi')
        data.generators[i] = {
            cost: Math.pow(10, 2 * i + 1),
            amt: 0
        }
    }
    
    console.log('hi')
}

function buy(i) {
    data.generators[i - 1].amt += 1
}

function sayHi() {
    
    console.log('hi')
}