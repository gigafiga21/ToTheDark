/**
 * Adds insignificant zeros to the number, converts it to `String`
 * @param  {Number} number   - will be converted and extended with zeros
 * @param  {Number} decimals - amount of digits in number
 * @return {String}
 */
export function addZeros(number, decimals)
{
    number = String(number);
    let zeros = decimals - number.length;
    zeros = zeros > 0 ? zeros : 0;

    return Array(zeros + 1).join('0') + number;
}

/**
 * Joins time measures by divider
 * If one measure is not known (null), measures which is less will not be included
 * @param  {Array[Number]} stamps - time stamps to join
 * @param  {String}  divider  - symbol to join stamps
 * @param  {Boolean} reversed - if array starts from the least measure
 * @return {String}
 */
function joinStamps(stamps, divider, reversed)
{
    let tmp = reversed ? [...stamps].reverse() : stamps;
    let stop = tmp.indexOf(null);

    tmp = (stop === -1 ? tmp : tmp.slice(0, stop))
        .map((stamp) => addZeros(stamp, 2));
    tmp = reversed ? tmp.reverse() : tmp;

    return tmp.join(divider);
}

/**
 * Converts date to `String` formatted as `HH:MM:SS DD.MM.YYYY`
 * Throws out unmentioned values
 * @param  {ExtendedTimeStamp} date
 * @return {String}
 */
export default function dateToString(date)
{
    return {
        date: joinStamps([
            date.date, date.months, date.years,
        ], '.', true),
        time: joinStamps([
            date.hours, date.minutes, date.seconds,
        ], ':', false),
    };
}
