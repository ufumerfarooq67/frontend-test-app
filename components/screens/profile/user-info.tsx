"use client";

import { IUserPayload } from "@/utils/interfaces";
import { Avatar, Tooltip } from "antd";
import { FaEnvelope, FaFemale, FaMale, FaUser } from "react-icons/fa";

interface IUserProfileProps {
  data: IUserPayload;
}

export default function UserInfo(props: IUserProfileProps) {
  const { data } = props;

  return (
    <div className="flex justify-center">
      <div className="text-center">
        <div className="flex flex-col items-center mb-4 mt-4">
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={data.picture}
            alt={"Profie.png"}
          />
          <span>Hi, my name is {data.fullName}</span>
        </div>

        <div className="flex justify-center bg-indigo-500 mt-3 p-2 space-x-4">
          <span className="cursor-pointer">
            <Tooltip title={data.username}>
              <FaUser color="white" size="22" />
            </Tooltip>
          </span>
          <span className="cursor-pointer">
            <Tooltip title={data.email}>
              <FaEnvelope color="white" size="22" />
            </Tooltip>
          </span>

          <span className="cursor-pointer">
            <Tooltip title={data.gender}>
              {data.gender === "male" ? (
                <FaMale color="white" size="22" />
              ) : (
                <FaFemale color="white" size="22" />
              )}
            </Tooltip>
          </span>
        </div>
      </div>
    </div>
  );
}
