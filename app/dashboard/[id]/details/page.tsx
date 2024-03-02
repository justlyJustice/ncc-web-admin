"use client";

import DashboardContent from "@/components/dashboard/DashoardContent";
import Sidebar from "@/components/dashboard/Sidebar";

// import callsApi from "@/services/calls";
import withAuth from "@/hoc/withAuth";

import "../../dashboard.css";
import Button from "@/components/Button";
import LetterImage from "@/components/LetterImage";
import { useRouter } from "next/navigation";

const CallDetails = () => {
  const router = useRouter();

  return (
    <div className="dashboard-wrapper">
      <Sidebar />

      <DashboardContent>
        <div className="calls-table">
          <div className="table-header flex">
            <h2>Call Details</h2>
          </div>

          <div className="details">
            <div className="detail">
              <LetterImage name={"J"} />
              <LetterImage name={"E"} />
            </div>

            <div className="detail">
              <h3>Caller: </h3>

              <p>Emmanuel Abraham</p>
            </div>

            <div className="detail">
              <h3>Caller Location: </h3>
            </div>

            <div className="detail">
              <h3>Call Status: </h3>
            </div>

            <div className="detail">
              <h3>Call Time</h3>
            </div>

            <div className="detail">
              <h3>Receiver</h3>
            </div>

            <div className="detail">
              <h3>Receiver Location:</h3>
            </div>

            <div
              className="container"
              onClick={() => router.push("/dashboard")}
            >
              <button className="back-btn">Go back</button>
            </div>
          </div>
        </div>
      </DashboardContent>
    </div>
  );
};

export default withAuth(CallDetails);
