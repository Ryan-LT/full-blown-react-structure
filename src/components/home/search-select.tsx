import React, { FunctionComponent } from 'react';
import Select from 'react-select';
import { getLocation, searchLocation, State } from '@store';
import { useDispatch, useSelector } from 'react-redux';

import './styles/search-select.scss';

export const SearchSelect: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { searchResults, isSearching } = useSelector((state: State) => state.home);
  let timeout: ReturnType<typeof setTimeout>;

  const handleSearchInput = (value: string): void => {
    if (!value) return;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(searchLocation({ query: value }));
    }, 500);
  };

  const handlePickLocation = ({ value }: any) => {
    dispatch(getLocation(value));
  };

  return (
    <div className="search-select">
      <Select
        placeholder="Search..."
        options={searchResults.map((item) => ({
          value: item.woeid,
          label: item.title,
        }))}
        isLoading={isSearching}
        onInputChange={handleSearchInput}
        onChange={handlePickLocation}
      />
    </div>
  );
};
