let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
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
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };
 
// 1. CREATES THE REPEATED CARDS

let html = '';

for (let i = 0; i < Object.keys(movieData).length; i++) {
  let card = Object.values(movieData)[i]; // BREAKTHROUGH!!!! - Values lets you access the data of each title.
  let title = Object.keys(movieData)[i]; // Keys lets you access the the actual title. So it goes object > keys > values.
  html +=
    `<div class="card">
    <!-- THIS WILL BE REPLACED WITH JAVASCRIPT -->
    <img src="images/filler.jpg" alt="#">
    <h4>${title}</h4>
    <p>${card.rating}/10</p>
    <p>
      Summary: ${card.plot}
    </p>
    <p>Starring: ${card.cast.join(', ')}.</p> 
      <!-- 
        Use .join to add the comma and space. Also: I found this code but don't 
        understand it yet, when added it will replace 
        last comma with ', and' =
         ...join(', '))}.replace(/, ([^,]*)$/, ' and $1') 
        Come back and pick this apart if time.
        -->
    <p>First aired: ${card.year}.</p>
    <p>Runtime: ${card.runtime} minutes.</p>
  </div>
    `
    ;  
}

document.querySelector('.card-container').insertAdjacentHTML('beforeend', html); 
