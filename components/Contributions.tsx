"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Link} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Jayden Silvera",
    role: "Group Leader, Worked on Reviews and Poster Concepts",
    status: "✔️ ✔️ ✔️ ✔️",
  },
  {
    key: "2",
    name: "Amari Cross",
    role: "Technical Lead, Worked on the design of poster, movie trailer and website",
    status: "✔️ ✔️ ✔️ ✔️",
  },
  {
    key: "3",
    name: "Rahim Downes",
    role: "Senior Developer, Worked on design of poster and reviews",
    status: "✔️ ✔️ ✔️ ✔️",
  },
  {
    key: "4",
    name: "Caleb Tayler-Brown",
    role: "Producer, made sure the group had all the material needed and helped around with everything",
    status: "✔️ ✔️ ✔️ ✔️",
  },
  {
    key: "5",
    name: "Mikhail King",
    role: "Technical Manager, Worked on movie trailer, the main poster and the reviews",
    status: "✔️ ✔️ ✔️ ✔️",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "CONTRIBUTION MARKS",
  },
];

export default function Contributions() {
  return (
    <div className="min-h-screen flex items-center flex-col bg-zinc-900 ">
    <h1 className=" border-b-3 border-b-zinc-5 text-5xl font-bold pt-10">Contributions</h1>
    <Table aria-label="Example table with dynamic content" className="max-w-[800px] mt-24">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    <Link
        isExternal
        href="https://docs.google.com/spreadsheets/d/1BAgPUuJE_aLFjqoZVJHpDnKBjDU5NSPqADFLH3gcYEk/edit?usp=sharing"
        showAnchorIcon
        className="pt-5 "
        color="success"
      >
        Google Form Results Spreasheet
      </Link>
    </div>
  );
}
