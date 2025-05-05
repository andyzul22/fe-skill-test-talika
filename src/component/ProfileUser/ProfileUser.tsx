import CodeBlock from "@/component/CodeBlock/CodeBlock";
import { UserProfileProps } from "@/types";

export default function ProfileUser({ data }: UserProfileProps) {
  if (!data) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-fit">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-extrabold text-center text-indigo-600">
            {data.name}
          </h1>
          <div className="w-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 h-1 rounded-full"></div>
          <p className="text-lg text-center text-gray-600 mt-2">{data.email}</p>
          <div className="space-y-2 mt-4">
            <p className="text-lg text-center text-gray-800 font-medium">
              Public Key:
            </p>
            <CodeBlock value={data.publicKey} />
          </div>
        </div>
      </div>
    </div>
  );
}
