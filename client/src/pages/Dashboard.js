import React from "react";
import DashboardForm from "../component/DashboardForm";
import { DashboardTable } from "../component/DashboardTable";
import MainLayout from "../layout/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout>
      <DashboardForm />
      <DashboardTable />
    </MainLayout>
  );
};

export default Dashboard;
