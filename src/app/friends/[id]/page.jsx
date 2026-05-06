"use client";
import friends from "../../data/friends.json";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";
import { FaBell, FaTrash, FaPhone, FaMessage, FaVideo } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import Image from "next/image";

export default function FriendDetailPage() {
  const { id } = useParams();
  const friend = friends.find((f) => f.id === Number(id));

  if (!friend) {
    return <h2 className="text-center mt-10 font-bold text-4xl">Friend not found</h2>;
  }

  const statusColor =
    friend.status === "overdue"
      ? "bg-red-100 text-red-600"
      : friend.status === "almost due"
        ? "bg-yellow-100 text-yellow-600"
        : "bg-green-100 text-green-600";

  const tagColor =
    friend.tag?.toLowerCase() === "work"
      ? "bg-blue-100 text-blue-600"
      : friend.tag?.toLowerCase() === "family"
        ? "bg-purple-100 text-purple-600"
        : "bg-blue-100 text-blue-600";

  const handleAddToTimeline = (type) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friend.name}`,
      date: new Date().toISOString(),
    };
    const existingTimeline = JSON.parse(localStorage.getItem("timeline")) || [];
    localStorage.setItem("timeline", JSON.stringify([newEntry, ...existingTimeline]));
    toast(newEntry.title);
  };

  return (
    <div className="md:w-8/12 flex flex-col md:flex-row gap-6 p-6 mx-auto shadow-lg rounded-lg mt-10">
      <div className="text-center lg:max-w-md mx-auto p-5 mr-10">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="text-lg font-semibold mt-2">{friend.name}</h2>
        <div className={`mt-1 px-2 w-20 mx-auto py-1 text-xs rounded-full ${statusColor}`}>
          {friend.status}
        </div>
        <div className={`mt-1 px-2 w-20 mx-auto py-1 text-xs rounded-full ${tagColor}`}>
          {friend.tag}
        </div>
        <p className="text-gray-700 mt-3 font-semibold italic">{friend.note}</p>
        <p className="text-gray-700">Preferred: {friend.preferred_contact}</p>

        <div className="mt-6">
          <button className="w-full btn bg-gray-100 py-2 rounded">
            <FaBell /> Snooze 2 weeks
          </button>
          <button className="w-full btn bg-gray-100 py-2 rounded">
            <FaArchive /> Archive
          </button>
          <button className="w-full btn text-red-500 bg-gray-100 py-2 rounded hover:bg-red-100">
            <FaTrash /> Delete
          </button>
        </div>
      </div>

      <div className="md:col-span-2 space-y-6 p-4 w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:w-3/4 mx-auto text-center gap-4">
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="font-bold text-3xl">{friend.days_since_contact}</h3>
            <p className="text-gray-600">Days Since Contact</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="font-bold text-3xl">{friend.goal}</h3>
            <p className="text-gray-600">Goal (Days)</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <h3 className="font-bold text-2xl">{new Date(friend.next_due_date).toDateString()}</h3>
            <p className="text-gray-600">Next Due Date</p>
          </div>
        </div>

        <div className="bg-white p-4 items-center">
          <div className="mb-1 flex justify-between items-center">
            <h3 className="font-semibold text-[#244D3F]">Relationship Goal</h3>
            <span className="btn rounded-full text-xs">Edit</span>
          </div>
          <p className="text-gray-600">
            Connect every <span className="font-semibold">{friend.goal} days</span>
          </p>

          <div className="mt-6 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-[#244D3F]">Quick Check-In</h3>
            <div className="mt-2 flex justify-between text-center items-center md:w-1/2 mx-auto">
              <div className="p-3 shadow-sm">
                <button
                  onClick={() => handleAddToTimeline("call")}
                  className="bg-gray-200 px-5 py-2 rounded hover:bg-gray-300"
                >
                  <FaPhone className="w-5 h-5 inline-block mr-2" />
                  Call
                </button>
              </div>
              <div className="p-3 shadow">
                <button
                  onClick={() => handleAddToTimeline("message")}
                  className="bg-gray-200 px-5 py-2 rounded hover:bg-gray-300"
                >
                  <FaMessage className="w-5 h-5 inline-block mr-2" />
                  Text
                </button>
              </div>
              <div className="p-3 shadow">
                <button
                  onClick={() => handleAddToTimeline("video")}
                  className="bg-gray-200 px-5 py-2 rounded hover:bg-gray-300"
                >
                  <FaVideo className="w-5 h-5 inline-block mr-2" />
                  Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
