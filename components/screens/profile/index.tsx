"use client";

// Interface
import { IUserPayload } from "@/utils/interfaces";

// Components
import UserInfo from "./user-info";
import GoogleMaps from "@/components/ui/google-maps";

interface IUserProfileProps {
  data: IUserPayload;
}

export default function ProfileScreen(props: IUserProfileProps) {
  const { data } = props;

  return (
    <div className="flex flex-col justify-start h-screen">
      <UserInfo data={data} />
      <GoogleMaps coordinates={data.coordinates} />
    </div>
  );
}
