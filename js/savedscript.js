let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
      image: 'images/darjeeling.jpeg',

    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
      image: 'images/royal.jpeg',

    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
      image: 'images/fox.jpeg',

    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
      image: 'images/budapest.jpeg',
    },
  };
 
// 1. CREATES THE REPEATED CARDS

let html = '';
let extraHtml = ''

for (let i = 0; i < Object.keys(movieData).length; i++) {
  let card = Object.values(movieData)[i]; // BREAKTHROUGH!!!! - Values lets you access the data of each title.
  let title = Object.keys(movieData)[i]; // Keys lets you access the the actual title. So it goes object > keys > values.
  html +=
    `<div class="card">
      <img src="${card.image}" alt="Film Still">
      <h4>${title}</h4>
      <p class="card_rating_text">${card.rating}/10</p>
      <p class="card_summary_text">
      Summary: ${card.plot}
      </p>
      <p class="card_starring_text">Starring: ${card.cast.join(', ')}.</p> 
        <!-- 
          Use .join to add the comma and space. Also: I found this code but don't 
          understand it yet, when added it will replace 
          last comma with ', and' =
          ...join(', '))}.replace(/, ([^,]*)$/, ' and $1') 
          Come back and pick this apart if time.
          -->
      <p class="card_year_text">First aired: ${card.year}</p>
      <p class="card_runtime_text">Runtime: ${card.runtime} minutes</p>
    </div>
    `
    ;  
}

document.querySelector('.card-container').insertAdjacentHTML('afterbegin', html); 

// 2. ADDS AN ACCURATE DATE

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1; // You need + 1 as month is seen as 0-11.
let year = date.getFullYear();
let headingDate = `${day} / ${month} / ${year}`;


// This adds a 0 prefix if day/month is a single digit - Aesthetic Only
if ( day <= 9 & month >= 10) {
    headingDate = `0${day} / ${month} / ${year}`;
}  else if ( day >= 10 & month <= 9 ) {
    headingDate = `${day} / 0${month} / ${year}`;
}  else if ( day <= 9 & month <= 9) {
    headingDate = `0${day} / 0${month} / ${year}`;
}  

document.getElementById("clock").innerHTML = headingDate.toLocaleString();


// 3. TOGGLES DISPLAYED INFO USING CHECKBOXES

function toggleRating(obj) {

  if(obj.checked) {
    for (let i = 0; i < Object.keys(movieData).length; i++) {
    document.querySelectorAll('.card_rating_text')[i].style.display = "block";
    }
  }
  else {
    for (let i = 0; i < Object.keys(movieData).length; i++) {
      document.querySelectorAll('.card_rating_text')[i].style.display = "none";
      }
  }
}

function toggleSummary(obj) {

  if(obj.checked) {
    for (let i = 0; i < Object.keys(movieData).length; i++) {
    document.querySelectorAll('.card_summary_text')[i].style.display = "block";
    }
  }
  else {
    for (let i = 0; i < Object.keys(movieData).length; i++) {
      document.querySelectorAll('.card_summary_text')[i].style.display = "none";
      }
  }
}

function toggleStarring(obj) {

  if(obj.checked) {
    for (let i = 0; i < Object.keys(movieData).length; i++) {
    document.querySelectorAll('.card_starring_text')[i].style.display = "block";
    }
  }
  else {
    for (let i = 0; i < Object.keys(movieData).length; i++) {
      document.querySelectorAll('.card_starring_text')[i].style.display = "none";
      }
  }
}

function toggleAired(obj) {

  if(obj.checked) {
    for (let i = 0; i < Object.keys(movieData).length; i++) {
    document.querySelectorAll('.card_year_text')[i].style.display = "block";
    }
  }
  else {
    for (let i = 0; i < Object.keys(movieData).length; i++) {
      document.querySelectorAll('.card_year_text')[i].style.display = "none";
      }
  }
}

function toggleRuntime(obj) {

  if(obj.checked) {
    for (let i = 0; i < Object.keys(movieData).length; i++) {
    document.querySelectorAll('.card_runtime_text')[i].style.display = "block";
    }
  }
  else {
    for (let i = 0; i < Object.keys(movieData).length; i++) {
      document.querySelectorAll('.card_runtime_text')[i].style.display = "none";
      }
  }
}

// 4. CREATES A SUBMITTABLE FORM

let submitForm = document.getElementById('submit_form');

// User adds their own film which gets checked for empty fields before submitting
submitForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Stops form from submitting before checking for blank values
  let userTitle = document.getElementById('form_title');
  let userRating = document.getElementById('form_rating');
  let userSummary = document.getElementById('form_summary');
  let userStarring = document.getElementById('form_starring');
  let userAirdate = document.getElementById('form_airdate');
  let userRuntime = document.getElementById('form_runtime');


  if ( userTitle.value == '' || userRating.value == '' || userSummary.value == '' || userStarring.value == '' || userAirdate.value == '' || userRuntime.value == '' ) {
    alert("Make sure you've filled in all the fields"); // Checks for empty fields
  } else {
    let userMovie = {    
        rating: userRating.value,
        runtime: userRuntime.value,
        year: userAirdate.value,
        plot: userSummary.value,
        cast: userStarring.value 
   }
   console.log(userMovie);

// Users Movie gets added to the movieData object
   movieData[userTitle.value] = userMovie; //Breakthrough!! using [] means you can access the .value rather than using dot notation
   console.log(movieData);

// We access the last entry in the object (the users one)

  //  let lastUserTitle = Object.keys(movieData).pop(); // accesses last added film title
  //  let lastUserInfo = Object.values(movieData).pop(); // accesses the info of the last film title

  //  console.log(lastUserTitle, lastUserInfo);

// We add this to the HTML
 
  let userCard = Object.keys(movieData).pop(); // BREAKTHROUGH!!!! - Values lets you access the data of each title.
  let userInfo = Object.values(movieData).pop(); // Keys lets you access the the actual title. So it goes object > keys > values.
  extraHtml +=
    `<div class="card">
      <h4>${userInfo}</h4>
      <p class="card_rating_text">${userCard.rating}/10</p>
      <p class="card_summary_text">
      Summary: ${userCard.plot}
      </p>
      <p class="card_starring_text">Starring: ${userCard.cast}.</p> 
        <!-- 
          Use .join to add the comma and space. Also: I found this code but don't 
          understand it yet, when added it will replace 
          last comma with ', and' =
          ...join(', '))}.replace(/, ([^,]*)$/, ' and $1') 
          Come back and pick this apart if time.
          -->
      <p class="card_year_text">First aired: ${userCard.year}</p>
      <p class="card_runtime_text">Runtime: ${userCard.runtime} minutes</p>
    </div>
    `
    ;  
    document.querySelector('.card-container').insertAdjacentHTML('beforeend', extraHtml); 

}

   alert("Your film has been added! Thankyou."); 
 
//  document.querySelector('.card-container').insertAdjacentHTML('beforeend', extraCard);
  
})

    // Code to revisit in case you think that appending might be better: 




//   // This creates an extra card with the user values:
//   let extraCard = '';
//   extraCard +=
//     `<div class="card">
//       <h4>${userTitle.value}</h4>
//       <p class="card_rating_text">${userRating.value}/10</p>
//       <p class="card_summary_text">
//       Summary: ${userSummary.value}
//       </p>
//       <p class="card_starring_text">Starring: ${userStarring.value}.</p> 
//         <!-- 
//           Use .join to add the comma and space. Also: I found this code but don't 
//           understand it yet, when added it will replace 
//           last comma with ', and' =
//           ...join(', '))}.replace(/, ([^,]*)$/, ' and $1') 
//           Come back and pick this apart if time.
//           -->
//       <p class="card_year_text">First aired: ${userAirdate.value}</p>
//       <p class="card_runtime_text">Runtime: ${userRuntime.value} minutes</p>
//     </div>
//     `
//   ;  
// document.querySelector('.card-container').insertAdjacentHTML('beforeend', extraCard); // Adds to the end 
// alert('Success!');