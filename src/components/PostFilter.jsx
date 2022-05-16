import React from "react";
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({ filetr, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Поиск"
        value={filetr.query}
        onChange={(e) => setFilter({ ...filetr, query: e.target.value })}
      />

      <hr style={{ margin: "15px 0" }} />

      <MySelect
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        value={filetr.sort}
        onChange={(sort) => setFilter({ ...filetr, sort: sort })}
      />
    </div>
  );
};

export default PostFilter;
