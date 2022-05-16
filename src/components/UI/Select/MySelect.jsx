import React from 'react';

const MySelect = ({options,defaultValue, value, onChange}) => {
    return (
      <select value={value} onChange={(e)=>onChange(e.target.value)}>
          <option disabled value="">{defaultValue}</option>
          {
              options.map(e=>
                <option key = {e.value}  value={e.value}>
                    {e.name}
                </option>)
          }
      </select>
    );
};

export default MySelect;