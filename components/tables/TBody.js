"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import LetterImage from "../LetterImage";

import { formatDate, getCallStatus } from "@/utils/helpers";

const statusBackgrounds = {
  ongoing: "bg-success",
  missed: "bg-danger",
  finished: "bg-warning",
};

const TBody = ({ calls, handleSelectCall, selectAll }) => {
  const router = useRouter();

  return (
    <div className="tbody">
      {calls.map((call) => (
        <div
          className="flex trow"
          key={call._id}
          onClick={() => router.push(`/dashboard/${call._id}/details`, call)}
        >
          <div>
            <input
              checked={call.selected}
              type="checkbox"
              onChange={(e) => handleSelectCall(call._id, e)}
            />
          </div>

          <div className="flex">
            {call.userImage ? (
              <Image alt="img" src={call.caller.image} height={24} width={24} />
            ) : (
              <LetterImage name={call.user} />
            )}

            <p className="name">{call.user}</p>
          </div>

          <div>
            <p className="light-text webkit-clamp-text">{call.userCallLoc}</p>
          </div>

          <div
            className={`flex call-status ${statusBackgrounds[call.callStatus]}`}
          >
            <p>{getCallStatus(call.callStatus)}</p>
          </div>

          <div>
            <p className="light-text">{formatDate(call.createdAt)}</p>
          </div>

          <div className="flex">
            {call.userImage ? (
              <Image alt="img" src={call.caller.image} height={24} width={24} />
            ) : (
              <LetterImage name={call.mate} />
            )}

            <p className="name">{call.mate}</p>
          </div>

          <div>
            <p className="light-text webkit-clamp-text">{call.mateCallLoc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TBody;
