"use client";

import { Input, Select } from "antd";
import { FaSearch } from "react-icons/fa";

interface IHeaderProps {
  filter: string;
  search: string;
  onDropdownChange(val: string): void;
  onSearchInputChange(val: string): void;
}

export default function HeaderList(props: IHeaderProps) {
  const { filter, search, onDropdownChange, onSearchInputChange } = props;

  return (
    <div className="flex justify-end space-x-4 mb-4 w-full">
      <Select
        defaultValue="All"
        value={filter !== "" ? filter : "All"}
        style={{ width: 250, height: 50 }}
        onChange={onDropdownChange}
        options={[
          { value: "All", label: "All" },
          { value: "Male", label: "Male" },
          { value: "Female", label: "Female" },
        ]}
      />
      <Input
        style={{ width: 250 }}
        size="large"
        placeholder="Search"
        prefix={<FaSearch />}
        onChange={(e) => onSearchInputChange(e.target.value)}
      />
    </div>
  );
}
