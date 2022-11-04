import React from "react";
import "./css/Faq.css";

function Faq() {
  return (
    <div className="faq">
      <h1>Common Questions about RentKar</h1>
      <main>
        <details open>
          <summary>What is the fuel policy?</summary>
          <div className="faq__content">
            <p>
              The car will be delivered with a full tank and must be returned
              similarly. The customer pays for the fuel charges based on usage.
              We will charge for the differential fuel if the car is returned
              with less than full tank fuel.<br></br> The customer can either pay this
              directly by cash/card at the time of car pick up by Avis driver or
              the same will be deducted from the security deposit. The
              assessment made by the Avis driver on the differential fuel amount
              will be final.
            </p>
          </div>
        </details>

        <details>
          <summary>Are self-drive automobile rentals available?</summary>
          <div className="faq__content">
            <p>
              When you hire a car, you have the option of driving yourself.
              Because to COVID-19, most vehicle rental firms, particularly Revv,
              allow clients to drive themselves so that the social distancing
              protocol may be followed effectively.
            </p>
          </div>
        </details>

        <details>
          <summary> Which cities are available for vehicle rental?</summary>
          <div className="faq__content">
            <p>
              Vehicle rental services are accessible in all Tier-1 and many
              Tier-2 cities in India. We provide automobile rental services in
              Bangalore, Hyderabad, Mumbai, Delhi-NCR, Chennai, Pune, Kolkata,
              Ahmedabad, Bhubaneswar, Chandigarh, Coimbatore, Jaipur, Kochi,
              Mangalore, Mysore, Nagpur, Surat, Tirupati, Trivandrum, Vadodara,
              Vijayawada, and Vizag, among other places.
            </p>
          </div>
        </details>

        <details>
          <summary>What are the eligibility requirements for renting a vehicle?</summary>
          <div className="faq__content">
            <p>
            The main requirement for using a vehicle rental service is that you be 21 years old or older and have a valid four-wheeler licence. You must also have an ID and address evidence, which must be shown to the firm while renting a vehicle. You must present the actual licence, not a copy printed on A4 paper.
            </p>
          </div>
        </details>

        <details>
          <summary>Can I cancel my hire vehicle?</summary>
          <div className="faq__content">
            <p>
            Yes, you are free to terminate the renting service. You may do so via the app, the website, or simply by calling us. The cancellation fees are determined by the moment you notify the firm. If you are using Rentkar, you can find detailed information on the cancellation process in their Fee policy.
            </p>
          </div>
        </details>

        <details>
          <summary>Can anybody else drive the vehicle except the reservation applicant?</summary>
          <div className="faq__content">
            <p>
            Yes, however, each individual intending to drive the automobile must present a valid driver's licence on the day the car is picked up. If all drivers are unable to be present on the day of pick-up, a copy of each driver's licence (both sides) and passport must be provided and presented in advance.
            </p>
          </div>
        </details>

        <details>
          <summary>Can older folks hire vehicles as well?</summary>
          <div className="faq__content">
            <p>
            Yes. There are no age limitations. A vehicle can be rented by anybody with a valid driver's licence.
            </p>
          </div>
        </details>
      </main>
    </div>
  );
}

export default Faq;