import React from 'react';
import Navvar from '../../Home/Navvar/Navvar';
import SearchMain from '../SearchMain/SearchMain';

const Search = () => {
    return (
        <div>
            <Navvar search={true}/>
            <SearchMain/>
        </div>
    );
};

export default Search;