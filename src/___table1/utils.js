export function makeWeekKey({ week, year }) {
  if (week < 10) {
    week = '0' + week
  }
  return `${year}-${week}`
}

export const EMPTY_VALUE = Symbol.for('EMPTY_VALUE')
export const DISABLED_VALUE = Symbol.for('DISABLED_VALUE')
