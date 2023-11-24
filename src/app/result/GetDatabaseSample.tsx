"use client";
import { useSearchParams } from "next/navigation";

export default function SampleParamComponent() {
  const searchParams = useSearchParams();
  const no = searchParams.get("no");

  return (
    <>
      <br></br>
      <button>戻る</button>
    </>
  );
}
