import moment from "moment";

export function diffInMonths(date: Date, date2: Date): number {
    //TODO: too much alloc
    return Math.round(moment.duration(moment(date).diff(moment(date2))).asMonths())
}