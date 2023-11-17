"use client";

import { useSearchParams } from "next/navigation";

export default function SampleParamComponent() {
  const searchParams = useSearchParams();
  const no = searchParams.get("no");
  const name = searchParams.get("sample_name");

  return (
    <>
      <div>シリアルナンバーは{no}</div>
      <div>{name}</div>
    </>
  );
}