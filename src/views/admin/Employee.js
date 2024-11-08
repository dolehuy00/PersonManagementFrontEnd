import React from "react";

// components
import EmployeeTable from "components/Cards/EmployeeTable";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <EmployeeTable/>
        </div>
      </div>
    </>
  );
}
