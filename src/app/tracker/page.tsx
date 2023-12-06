'use client'
import { QrCaputure } from "./Cam";
import { Input } from "./ManualInput";

export default function App() {
  return (
    <div>
      <QrCaputure></QrCaputure>
      <br></br>
      <Input></Input>
    </div>
  );
}