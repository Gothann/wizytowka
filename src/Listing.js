import React from 'react';
// import './Listing.css';

function Listing() {
    
    const homeData = [
        {
            name: "Piękna rezydencja ",
            adress: "Ul. Kopernika 11",
            description: "6 pokoi, 2 łazienki",
            price: 1_600_000 ,
            photoName: "homes/estate1.jpeg",
            sold: false,
          },
          {
            name: "Wspaniały z 2 garażami",
            adress: "Ul. Przepiękna 129",
            description: "4 pokoje, 2 łazienki, 2 garaże",
            price: 1_000_000,
            photoName: "homes/estate2.jpeg",
            sold: false,
          },
          {
            name: "Drewniany pałac",
            adress: "Ul. Urocza 789",
            description: "8 pokoi, 4 łazienki, 2 garaże",
            price: 2_500_000,
            photoName: "homes/estate3.jpeg",
            sold: false,
          },
          {
            name: "Stylowy apartament",
            adress: "Ul. Wiślana 98",
            description: "3 pokoje, kuchnia",
            price: 350_000,
            photoName: "homes/estate4.jpeg",
            sold: true,
          },
          {
            name: "Nowoczesny loft",
            adress: "Ul. Fabryczna 55",
            description: "2 pokoje, aneks kuchenny",
            price: 475_000,
            photoName: "homes/estate5.jpeg",
            sold: false,
          },
          {
            name: "Spokojna dzielnica",
            adress: "Ul. Wyspiańskiego 13",
            description: "2 pokoje, aneks kuchenny",
            price: 280_000,
            photoName: "homes/estate6.jpeg",
            sold: false,
          },
      ];
    return (
        <div>
          {homeData.length === 0 ? (
            <p>Pracujemy nad nową ofertą. Zapraszamy niebawem </p>
          ) : (
            homeData.map((item, index) => (
              <React.Fragment key={index}>
                <div className={item.sold ? 'sold' : ''}>

                  <h2>{item.sold ? item.name : item.name}</h2>

                  {item.sold ? (
                    <img src={item.photoName} alt="Sprzedany" />
                  ) : (
                    <img src={item.photoName} alt={item.name} />
                  )}
                  {item.sold ? (
                    <p>SPRZEDANE</p>
                  ) : (
                    <p>Cena: {item.price}</p>
                  )}
                </div>
              </React.Fragment>
            ))
          )}
        </div>
      );
}

export default Listing;
