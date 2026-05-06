import FriendCard from "@/components/FriendCard";
import Banner from "./banner/Banner";
import friends from "./data/friends.json";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-3xl font-bold mb-4">Your Friend</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 gap-9 mx-auto">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}
