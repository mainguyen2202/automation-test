"use client"

import * as React from "react"
import {
  CaretSortIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ReactJson from "react-json-view"

// Định nghĩa kiểu dữ liệu cho TestCase
export type TestCase = {
  test_case_id: number;
  test_case: string;
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | string; // Thêm string vào Union
  token: string;
  request_body: {
    name?: string;
    email?: string;
    password?: string;
  };
  status_code: number;
  expected_result: {
    status?: string;
    userId?: string;
    message?: string;
    error?: string;
  };
}

// Hàm hiển thị JSON
const JsonCell = ({ data }: { data: any }) => (
  <div>
    <ReactJson src={data} />
  </div>
);

// Định nghĩa các cột cho bảng
export const columns: ColumnDef<TestCase>[] = [
  {
    accessorKey: "test_case_id",
    header: "Test Case ID",
    cell: ({ row }) => (
    // <JsonCell data={{ test_case_id: row.getValue("test_case_id") }} />
    <div className="capitalize">{row.getValue("test_case_id")}</div>
    ),
  },
  {
    accessorKey: "test_case",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Test Case
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => 
    // <JsonCell data={{ test_case: row.getValue("test_case") }} />
    <div className="capitalize">{row.getValue("test_case")}</div>
    ,
  },
  {
    accessorKey: "endpoint",
    header: "Endpoint",
    cell: ({ row }) => 
    // <JsonCell data={{ endpoint: row.getValue("endpoint") }} />
    <div className="lowercase">{row.getValue("endpoint")}</div>
    ,
  },
  {
    accessorKey: "method",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Method
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => 
    // <JsonCell data={{ method: row.getValue("method") }} />
    <div className="capitalize">{row.getValue("method")}</div>
    ,
  },
  {
    accessorKey: "token",
    header: () => <div className="text-right">Token</div>,
    cell: ({ row }) => 
    // <JsonCell data={{ token: row.getValue("token") }} />
    <div className="lowercase">{row.getValue("token")}</div>
    ,
  },
  {
    accessorKey: "request_body",
    header: "Request Body",
    cell: ({ row }) => 
    <JsonCell data={{request_body : row.getValue("request_body")}} />
  //   <div>
  //   {JSON.stringify(row.getValue("request_body"), null, 2)}
  // </div>
    ,
  },
  {
    accessorKey: "status_code",
    header: () => <div className="text-right">Status Code</div>,
    cell: ({ row }) =>
      //  <JsonCell data={{ status_code: row.getValue("status_code") }} />
    <div className="text-right">{row.getValue("status_code")}</div>
    ,
  },
  {
    accessorKey: "expected_result",
    header: "Expected Result",
    cell: ({ row }) => 
    <JsonCell data={{expected_result:row.getValue("expected_result")}} />
  //   <div>
  //         {JSON.stringify(row.getValue("expected_result"), null, 2)}
  // </div>
    ,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const testCase = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(testCase.test_case_id.toString())}
            >
              Copy Test Case ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]