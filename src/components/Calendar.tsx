/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import Months from '@/enums/months';
import { daysOfTheWeek, generateCalendarDays } from '@/lib/calendar';
import styles from '@/styles/Calendar.module.css';
import { Popover } from '@material-ui/core';
import { useState } from 'react';
import CreateEvent from './CreateEvent';

const Calendar = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: any): void => {
    if (event.currentTarget.getAttribute('is_current_month') === 'true')
      setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const popoverOpen = Boolean(anchorEl);

  const calendar = generateCalendarDays(Months.APRIL, 2021);

  function isCurrentMonth(day: Date, month: number): 'true' | 'false' {
    return day.getMonth() === month ? 'true' : 'false';
  }

  return (
    <div className={styles.root}>
      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <CreateEvent />
      </Popover>
      <div className={styles.calendar}>
        <div className={styles.daysOfTheWeek}>
          {daysOfTheWeek.map(dayOfTheWeek => (
            <div
              key={`dayOfTheWeek-${dayOfTheWeek}`}
              className={styles.dayOfTheWeek}
            >
              {dayOfTheWeek.substring(0, 3).toUpperCase()}
            </div>
          ))}
        </div>
        {calendar.map((week, index) => (
          <div key={`week-${index + 1}`} className={styles.week}>
            {week.map(day => (
              <div
                key={`day-${day.getTime()}`}
                className={styles.day}
                is_current_month={isCurrentMonth(day, Months.APRIL)}
                onClick={handleClick}
                role="button"
              >
                {day.getDate()}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
