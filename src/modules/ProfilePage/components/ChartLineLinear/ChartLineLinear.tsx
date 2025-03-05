"use client";
import React from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import Styles from "./ChartLineLinear.module.css"

import {
  Card,
  CardContent,
} from "../ui/card";

const chartData = [
  { month: "January", value: 200 },
  { month: "February", value: 305 },
  { month: "March", value: 237 },
  { month: "April", value: 73 },
  { month: "May", value: 209 },
  { month: "June", value: 219 },
  { month: "July" },
  { month: "August" },
  { month: "September" },
  { month: "October"},
  { month: "November" },
  { month: "December" },
];

const Component: React.FC= () => {
  return (
    <Card>
      <CardContent>
        <div className={Styles.chart}>
          <LineChart
            width={808}
            height={300}
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="1 0" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              ticks={[100, 200, 300, 400]}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "var(--card-bg)", borderRadius: "8px" }}
              formatter={(value, name) => [
                value,
                typeof name === "string" 
                  ? name.charAt(0).toUpperCase() + name.slice(1) 
                  : name
              ]}
            />
            <Line
              type="linear"
              dataKey="value"
              stroke="#ffffff"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </div>
      </CardContent>
    </Card>
  );
}

export default Component;