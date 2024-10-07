import { TestCase, columns } from "./columns";
import { DataTable } from "./data-table";

// async function getData(): Promise<TestCase[]> {
//   // Fetch data từ file JSON trên server
//   const response = await fetch("/path-to-your-json/mock-generated-testcase.json");
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   const { data } = await response.json(); // Giả sử cấu trúc JSON như bạn đã cung cấp
//   return data;
// }

import testCases from "./mock-generated-testcase.json"; // Đảm bảo đường dẫn đúng

async function getData(): Promise<TestCase[]> {
    // Trả về dữ liệu từ file JSON
    return testCases.data; // Giả sử cấu trúc JSON như bạn đã cung cấp
  }

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
