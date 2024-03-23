"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Hooks
import useAPICall from "@/custom-hooks/onCallAPI";

// Functions
import { onUsersMap } from "@/utils/functions";

// Constants
import { PAGINATION_OPTIONS } from "@/utils/constants";

// Interface
import {
  IFetchHookUserData,
  IPagination,
  IUserPayload,
  IUserPayloadRaw,
} from "@/utils/interfaces";

// Ant Design
import { Table, TableColumnsType } from "antd";

// Icons
import { FaEye } from "react-icons/fa";

// Components
import HeaderList from "./header";

// Debounce Method (Optmized Search)
const debounce = <F extends (...args: any[]) => void>(
  func: F,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: Parameters<F>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

// User List Main Component
export default function UserList() {
  // States
  const [users, setUsers] = useState<IUserPayload[]>([]);
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    results: 15,
  });
  const [searchText, setSearchText] = useState(""); // Search Keyword
  const [filter, setFilter] = useState(""); // Dropdown Filter (Gender)
  const [filteredUsers, setFilteredUsers] = useState<IUserPayload[]>([]); // Filtered Data

  // Hooks (API Call)
  const { isLoading, error, data }: IFetchHookUserData = useAPICall({
    url: "",
    pagination,
  });

  // Handlers
  const onInit = () => {
    const store = localStorage.getItem("filter");
    setFilter(store ?? "");
  };

  const onUserMapper = (items: IUserPayloadRaw[]) => {
    //Function to map user data
    const mapped_data = onUsersMap(items);
    setUsers(mapped_data);
  };

  const onDropdownChange = (value: string) => {
    setFilter(value);
    localStorage.setItem("filter", value);
  };

  // Search Input Handler with the help of debounce
  const onSearchInputChange = debounce((value) => {
    setSearchText(value);

    const filteredUsers = users.filter(
      (user) =>
        user?.id?.toLowerCase()?.includes(value?.toLowerCase()) ||
        user.fullName.toString().toLowerCase().includes(value.toLowerCase()) ||
        user.username.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  }, 300);

  // Effects
  useEffect(() => {
    onInit();
    onUserMapper(data);
  }, [data]);

  // Constants
  const columns: TableColumnsType<IUserPayload> = [
    {
      title: "ID",
      width: 100,
      dataIndex: "id",
      fixed: "left",
    },
    {
      title: "Full Name",
      width: 100,
      dataIndex: "fullName",
    },
    {
      title: "Username",
      width: 100,
      dataIndex: "username",
    },
    {
      title: "Gender",
      width: 100,
      dataIndex: "gender",
      filteredValue: [filter],
      onFilter: (value: string, record) =>
        record.gender.indexOf(value) === 0 || filter === "All",
    },
    {
      title: "Email",
      width: 100,
      dataIndex: "email",
    },

    {
      title: "Actions",
      fixed: "right",
      width: 90,
      render: (data) => {
        return (
          <Link
            href={{
              pathname: "/profile",
              query: { data: JSON.stringify(data) },
            }}
          >
            <span>
              <FaEye />
            </span>
          </Link>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <HeaderList
        filter={filter}
        search={searchText}
        onDropdownChange={onDropdownChange}
        onSearchInputChange={onSearchInputChange}
      />

      <Table
        columns={columns}
        dataSource={searchText ? filteredUsers : users}
        scroll={{ x: 1300 }}
        pagination={{
          ...PAGINATION_OPTIONS,
          total: 5000,
        }}
        onChange={(e) => {
          setPagination({
            page: e.current ?? 1,
            results: e.pageSize ?? 15,
          });
        }}
        bordered
        loading={isLoading}
      />
    </div>
  );
}
