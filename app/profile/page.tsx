"use client";

import ProfileScreen from "@/components/screens/profile";

interface IUserProfileProps {
  searchParams: {
    data: string;
  };
}

export default function UserProfile(props: IUserProfileProps) {
  const { data } = props.searchParams;

  return <ProfileScreen data={JSON.parse(data)} />;
}
