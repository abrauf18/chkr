"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function JobsGraph({ data, year }: { data: any; year: number }) {
  // data = [
  //   { year: 2022, month: 1, jobCount: 10 },
  //   { year: 2022, month: 2, jobCount: 8 },
  //   { year: 2022, month: 3, jobCount: 12 },
  //   { year: 2022, month: 4, jobCount: 15 },
  //   { year: 2022, month: 5, jobCount: 9 },
  //   { year: 2022, month: 6, jobCount: 11 },
  //   { year: 2022, month: 7, jobCount: 14 },
  //   { year: 2022, month: 8, jobCount: 13 },
  //   { year: 2022, month: 9, jobCount: 16 },
  //   { year: 2022, month: 10, jobCount: 18 },
  //   { year: 2022, month: 11, jobCount: 7 },
  //   { year: 2022, month: 12, jobCount: 10 },

  //   { year: 2023, month: 1, jobCount: 11 },
  //   { year: 2023, month: 2, jobCount: 9 },
  //   { year: 2023, month: 3, jobCount: 13 },
  //   { year: 2023, month: 4, jobCount: 14 },
  //   { year: 2023, month: 5, jobCount: 10 },
  //   { year: 2023, month: 6, jobCount: 12 },
  //   { year: 2023, month: 7, jobCount: 15 },
  //   { year: 2023, month: 8, jobCount: 11 },
  //   { year: 2023, month: 9, jobCount: 17 },
  //   { year: 2023, month: 10, jobCount: 19 },
  //   { year: 2023, month: 11, jobCount: 8 },
  //   { year: 2023, month: 12, jobCount: 12 },

  //   { year: 2024, month: 1, jobCount: 12 },
  //   { year: 2024, month: 2, jobCount: 10 },
  //   { year: 2024, month: 3, jobCount: 14 },
  //   { year: 2024, month: 4, jobCount: 13 },
  //   { year: 2024, month: 5, jobCount: 11 },
  //   { year: 2024, month: 6, jobCount: 15 },
  //   { year: 2024, month: 7, jobCount: 16 },
  //   { year: 2024, month: 8, jobCount: 14 },
  //   { year: 2024, month: 9, jobCount: 18 },
  //   { year: 2024, month: 10, jobCount: 20 },
  //   { year: 2024, month: 11, jobCount: 9 },
  //   { year: 2024, month: 12, jobCount: 13 },
  // ];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const filterData = data.filter(
    (item: { year: number; month: number; jobCount: number }) =>
      item.year === year
  );

  const updatedData = React.useMemo(
    () =>
      filterData.map(
        (item: { year: number; month: number; jobCount: number }) => ({
          ...item,
          Month: monthNames[item.month - 1],
          Jobs: item.jobCount,
        })
      ),
    [filterData]
  );

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={updatedData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF2600" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF2600" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Jobs"
            stroke="#FF2600"
            fillOpacity={1}
            fill="url(#colorUsers)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

