import { useEffect, useMemo, useState } from "react";

function getAge(birthDate, now = new Date()) {
  const bd = typeof birthDate === "string" ? new Date(birthDate) : birthDate;
  let age = now.getFullYear() - bd.getFullYear();
  const m = now.getMonth() - bd.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < bd.getDate())) age--;
  return age;
}

/**
 * Returns current age and updates at local midnight,
 * so it automatically changes on your birthday.
 */
export default function useAge(birthDateString) {
  const birthDate = useMemo(() => new Date(birthDateString), [birthDateString]);
  const [age, setAge] = useState(() => getAge(birthDate));

  useEffect(() => {
    // Recalculate now in case the day changed since mount
    setAge(getAge(birthDate));

    // Schedule update at next local midnight
    function scheduleNextMidnight() {
      const now = new Date();
      const next = new Date(now);
      next.setHours(24, 0, 0, 0); // next midnight local time
      const timeout = next - now;
      const id = setTimeout(() => {
        setAge(getAge(birthDate));
        scheduleNextMidnight(); // reschedule for following day
      }, timeout);
      return () => clearTimeout(id);
    }

    const cleanup = scheduleNextMidnight();
    return cleanup;
  }, [birthDate]);

  return age;
}
