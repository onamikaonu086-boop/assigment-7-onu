import FriendCard from "@/components/FriendCard";
import friends from "../data/friends.json";

export default function FriendsPage() {
  return (
    <div className="mx-auto mt-8 w-full max-w-6xl px-4 sm:mt-10 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">All Friends</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}