
const Selector = ( {changeType } ) => {
    return (
        <div>
              Type:
              <select onChange = {changeType} class="form-select"> 
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
        </div>
    )
}

export default Selector