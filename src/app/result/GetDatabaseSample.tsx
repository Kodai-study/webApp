"use client";
import { useSearchParams, } from "next/navigation";
import Link from 'next/link';

export default function SampleParamComponent() {
  const searchParams = useSearchParams();
  const no = searchParams.get("no");
  return (
    <>
      <br></br>
      <Link href="/tracker">戻る</Link>
    </>
  );
}
