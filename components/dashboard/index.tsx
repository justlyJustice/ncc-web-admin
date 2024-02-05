"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/components/modals";

import { DashboardCard } from "@/components/cards";
import DashboardContent from "@/components/dashboard/DashoardContent";
import Table from "@/components/tables/Table";
import Loading from "@/components/Loading";

import callsService from "@/services/calls";
import withAuth from "@/hoc/withAuth";

import useApi from "@/hooks/useApi";
import Sidebar from "@/components/dashboard/Sidebar";

import "../../app/dashboard/dashboard.css";

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const {
    data: calls,
    loading: loadingCalls,
    request: fetchCalls,
  } = useApi(callsService.getAllCalls);

  useEffect(() => {
    fetchCalls();
  }, []);

  const handleSelectAll = () => {};

  const handleSelectItem = (itemId) => {};

  if (loadingCalls) return <Loading visible={loadingCalls} />;

  return (
    <>
      <Modal visible={visible} setVisible={setVisible} />

      <div className="dashboard-wrapper">
        <Sidebar />

        <DashboardContent className="content">
          <div className="flex cards">
            <DashboardCard
              circleColor="primary-900"
              title="0"
              desc="Total Downloads"
            />

            <DashboardCard
              circleColor="success"
              title="0"
              desc="Total Registered"
            />

            <DashboardCard
              circleColor="warning"
              title="0"
              desc="Total Signins"
            />

            <DashboardCard
              circleColor="danger"
              title="0"
              desc="Total Uninstalled"
            />
          </div>

          <div className="calls-table">
            <div className="table-header flex">
              <h2>Call Table</h2>

              <button
                className="filter-btn"
                // onClick={() => setVisible(true)}
                disabled={calls && calls.length === 0}
                style={{
                  cursor:
                    calls && calls.length === 0 ? "not-allowed" : "pointer",
                  backgroundColor:
                    calls && calls.length === 0
                      ? "var(--secondary-100)"
                      : "var(--primary-900)",
                  color:
                    calls && calls.length === 0
                      ? "var(--primary-1100)"
                      : "var(--secondary-100)",
                }}
              >
                Filter Call Table
              </button>
            </div>

            {calls && calls.length === 0 ? (
              <div
                className="flex"
                style={{
                  justifyContent: "center",
                  padding: "auto 40px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "lighter",
                    marginTop: "10px",
                  }}
                >
                  No calls recorded yet!
                </h3>
              </div>
            ) : (
              <Table
                calls={calls}
                handleSelectCall={handleSelectItem}
                handleSelectAllContacts={handleSelectAll}
                selectAll={selectAll}
                selectedCalls={[]}
              />
            )}
          </div>
        </DashboardContent>
      </div>
    </>
  );
};

export default withAuth(Dashboard);
