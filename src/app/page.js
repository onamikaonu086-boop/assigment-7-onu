import FriendCard from "@/components/FriendCard";
import Banner from "./banner/Banner";
import friends from "./data/friends.json";

export default function Home() {
  return (
    <div className="pb-8">
      <Banner />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Your Friend</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}
