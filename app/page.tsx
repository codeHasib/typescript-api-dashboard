"use client";

import ApiInputSection from "./components/ApiInputSecion";
import { useState } from "react";
import Loader from "./components/Loader";
import DataDisplay from "./components/DataDisplay";

export default function Home() {
  const [data, setData] = useState<[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  return (
    <>
      <ApiInputSection
        data={data}
        setData={setData}
        isFetching={isFetching}
        setIsFetching={setIsFetching}
      ></ApiInputSection>
      <div className="container mx-auto px-3">
        {isFetching ? (
          <Loader></Loader>
        ) : (
          <DataDisplay data={data}></DataDisplay>
        )}
      </div>
    </>
  );
}
