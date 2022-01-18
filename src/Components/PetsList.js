import PetItem from './PetItem';
import {useState} from "react"
import SearchBar from './SearchBar';
import Selector from './Selector';

export default function PetsList(props) {  
  
  const [query, setQuery] = useState();
  const [type, setType] = useState();

  function changeQuery (event) {
    setQuery(event.target.value)
    
  };
  
  function changeType (event) {
   setType(event.target.value)
  };
  
  const pets = props.pets.filter( (pet) => pet.name.toLowerCase().includes(query.toLowerCase()) && pet.type.includes(type) ).map((pet) => <PetItem key={pet.id} pet={pet} />);

  return (
    <section id="doctors" class="doctor-section pt-140">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-5 col-xl-6 col-lg-7">
            <div class="section-title text-center mb-30">
              <h1 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <SearchBar changeQuery = {changeQuery} />
              <br></br>
              <Selector changeType = {changeType} />
          </div>
        </div>
        </div>
        <div class="row justify-content-center">{pets}</div>
      </div>
    </section>
  );
}