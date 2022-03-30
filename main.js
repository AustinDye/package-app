const packages = [
    {heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs'}, 
    {heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk'}, 
    {heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147'}, 
    {heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145'}, 
    {heavy: true, priority: true, fragile: true, to: 'Brittany', trackingNumber:'if93842'}, 
    {heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz'}, 
    {heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367'}]

    let renderedPackages = []

function gameStart()    { 
     renderedPackages = JSON.parse(JSON.stringify(packages))
     const index = Math.floor(Math.random() * (renderedPackages.length -1))
     renderedPackages[index].priority = true
     drawBoxes()
}

function drawBoxes(){
    let template = ""
    for (let i = 0; i < renderedPackages.length; i++) {
        const package = renderedPackages[i]
        template += `
        <div class="col-4">
            <div class="card p-3 m-3" id="boxPackage">
                <h1>${package.to}</h1>
                <h3>TRACKING NUMBER: ${package.trackingNumber}</h3>
         </div>      
        </div>        
        `
     }                
    document.getElementById("boxes").innerHTML = template

}

function sort(attribute){
    let compChoice = renderedPackages.find(b => b.priority)
    renderedPackages = renderedPackages.filter(b => b[attribute] === compChoice[attribute])
    drawBoxes()
}

gameStart()
