// import { createGuestList } from './data/guestdata.js'
const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()


function guestForm() {
  //provide initial guests data list created from GuestManagement class

  let guests = guestList
 

  // 1. register event for searching and adding
  function registerEventHandling() {
    
    document.getElementById("search-input").addEventListener("keyup", searchGuest)
    document.getElementById("add-guest-btn").addEventListener("click", addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    
    const display_area = document.getElementById("display-area")
    const div_parent = document.createElement("div")
    const span_name = document.createElement("span")
    const delete_span = document.createElement("span")

    span_name.textContent = guestItem.firstname + " " + guestItem.lastname
    delete_span.classList.add("remove-icon")
    delete_span.id = `${guestItem.firstname}-${guestItem.lastname}`
    delete_span.style = "cursor:pointer;color:red"
    delete_span.textContent = "[X]"

    delete_span.addEventListener("click", removeGuest)

    display_area.append(div_parent)
    div_parent.append(span_name, delete_span)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const display_area = document.getElementById("display-area")
    Array.from(display_area.children).forEach((child) => {
      child.remove()
    })


    guestResult.forEach((guest) => {

      displayGuest(guest)
    })


  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {

    const search_input = event.target.value

    displayGuests(guests.searchGuests(search_input))


  }

  // 5. Function to add a new guest
  function addGuest() {
    let firstname = document.getElementById("firstname-input").value
    let lastname = document.getElementById("lastname-input").value

    guests.addNewGuest(firstname, lastname)
    displayGuest({ firstname, lastname })
    firstname = ""
    lastname = ""
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const name = event.target.getAttribute("id")
    const name_arr = name.split("")
    let cut_index
    name_arr.forEach((char, i) => {
      if (char === "-") {
        cut_index = i
      }
    })
    const firstname = name_arr.slice(0, cut_index).join('')
    const lastname = name_arr.slice(cut_index + 1, name_arr.length).join('')
    guests.removeGuest({ firstname: firstname, lastname: lastname })
    event.target.parentElement.remove()

  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
module.exports = guestForm
// export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())
