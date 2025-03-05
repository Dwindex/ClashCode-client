import React, { useState } from "react";
import Styles from "./ProfileStats.module.css";

const ProfileStats: React.FC = () => {
  const totalDays = 87;
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const years = Array.from({ length: currentYear - 2023 + 1 }, (_, index) => 2023 + index);

  const activeDaysData = [
    { month: "JAN", days: generateActiveDays(31) },
    { month: "FEB", days: generateActiveDays(28) },
    { month: "MAR", days: generateActiveDays(31) },
    { month: "APR", days: generateActiveDays(30) },
    { month: "MAY", days: generateActiveDays(31) },
    { month: "JUN", days: generateActiveDays(30) },
    { month: "JUL", days: generateActiveDays(31) },
    { month: "AUG", days: generateActiveDays(31) },
    { month: "SEP", days: generateActiveDays(30) },
    { month: "OCT", days: generateActiveDays(31) },
    { month: "NOV", days: generateActiveDays(30) },
    { month: "DEC", days: generateActiveDays(31) },
  ];

  function generateActiveDays(daysInMonth: number) {
    return Array.from({ length: daysInMonth }, () => Math.random() < 0.2);
  }

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(event.target.value));
  };

  return (
    <div className={Styles.boxes}>
      {/* Year Dropdown */}
      <div className={Styles.dropDiv}>
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className={Styles.yearSelect}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Active Days Grid */}
      <div>
        <p className={Styles.activeDays}>Total Active Days {totalDays}</p>
        <div className={Styles.gridContainer}>
          {activeDaysData.map(({ month, days }) => (
            <div key={month} className={Styles.monthContainer}>
              <div className={Styles.daysGrid}>
                {Array.from({ length: 35 }).map((_, index) => {
                  const row = Math.floor(index / 5);
                  const column = index % 5;
                  const dayIndex = column * 7 + row - 2;

                  return (
                    <div
                      key={index}
                      className={Styles.dayBox}
                      style={{
                        backgroundColor:
                          dayIndex >= 0 && dayIndex < days.length && days[dayIndex]
                            ? "#f67b46"
                            : dayIndex >= 0 && dayIndex < days.length
                            ? "#545e66"
                            : "#1b2934",
                      }}
                    />
                  );
                })}
              </div>
              <span className={Styles.monthLabel}>{month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
