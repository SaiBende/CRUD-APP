
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const response = await fetch("http://127.0.0.1:3000/api/topics/", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch Topics");
    }
    return response.json();
  } catch (error) {
    console.error("Error while loading topics", error);
    throw error; // Propagate the error up the call stack
  }
};

async function TopicList() {
  try {
    const topicsResponse = await getTopics();
    const topics = topicsResponse.topics || []; // Safely access the topics property

    return (
      <>
        {topics.map((topic) => (
          <div className="border border-slate-900 p-4 my-3 flex justify-between gap-5 items-start">
            <div>
              <h2 className="font-bold text-2xl">{topic.title}</h2>
              <div>{topic.description}</div>
              <div className="text-sm text-gray-400 ">Created At: {topic.createdAt}</div>
              <div className="text-sm text-gray-400 ">Updated At: {topic.updatedAt}</div>
              
            </div>
            <div className="flex gap-2">
              <RemoveBtn id={topic._id} />
              <Link href={`/editTopic/${topic._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  } catch (error) {
    console.error("Error rendering TopicList", error);
    return <div>Error loading topics</div>; // Render a fallback error message
  }
}

export default TopicList;