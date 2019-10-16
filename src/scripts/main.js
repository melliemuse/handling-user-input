// Get reference to container div
const containerDiv = document.querySelector('.container')

// Build two fieldsets and input fields that will allow you to enter the name of a favorite thing of yours, and a location where you might purchase it (Target, Amazon, Best Buy, etc...)

const nameContainer = document.createElement('fieldset')
const nameLabel = document.createElement('label')
const nameValue = document.createElement('input')

nameLabel.innerHTML = 'Favorite Thing'
containerDiv.appendChild(nameContainer)
nameContainer.appendChild(nameLabel)
nameContainer.appendChild(nameValue)


const locationContainer = document.createElement('fieldset')
const locationLabel = document.createElement('label')
const locationValue = document.createElement('input')

locationLabel.innerHTML = 'Where to purchase'
containerDiv.appendChild(locationContainer)
locationContainer.appendChild(locationLabel)
locationContainer.appendChild(locationValue)


const saveButton = document.createElement('button')
saveButton.innerHTML = 'Save to Wishlist'


containerDiv.appendChild(saveButton)
let returnMessageContainer = document.createElement('div')
containerDiv.appendChild(returnMessageContainer)


saveButton.addEventListener('click', () => {
    console.log("Click")
    let nameInputValue = nameValue.value
    let locationInputValue = locationValue.value
    const returnMessage = `I can purchase ${nameInputValue} at ${locationInputValue}`
    returnMessageContainer.innerHTML = returnMessage
    return returnMessageContainer
})



// Add a button beneath the fieldsets labeled "Save to Wishlist".

// When the button is clicked, display the data in the following format in the DOM.

// I can purchase {thing} at {location}