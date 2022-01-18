
const SearchComponent = ( {changeQuery }) => {

    return (
            <div class="input-group rounded">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange = {changeQuery}
                />
            </div>
    )
}

export default SearchComponent
