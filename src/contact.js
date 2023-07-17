function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')
    let button = document.getElementsByTagName("button");
  button[2].classList.add("active");
  button[1].classList.remove("active");
  button[0].classList.remove("active"); 
  
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 123 456 789'
  
    const address = document.createElement('p')
    address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA'
  
    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = 'images/restaurant-location.png'
    restaurantLocation.alt = 'Mozzafiato restaurant location'
  
    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)
  
    return contact
  }
  
  function loadContact() {
    let main = document.getElementsByTagName('view')
    main = main[0];
    main.textContent = ''
    main.appendChild(createContact())
  }
  
  export default loadContact
  