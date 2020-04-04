/**
 * Adds insignificant zeros to the number, converts it to `String`
 * @param  {Number} number   - will be converted and extended with zeros
 * @param  {Number} decimals - amount of digits in number
 * @return {String}
 */
export function addZeros(number, decimals)
{
    number = String(number);
    const zeros = Array(decimals - number.length + 1).join('0');

    return zeros + number;
}

/**
 * Converts `Date` to `String` formatted as `HH:MM:SS DD.MM.YYYY`
 * @param  {Date} date
 * @return {String}
 */
export default function dateToString(date)
{
    return addZeros(date.getHours(), 2) + ':' +
        addZeros(date.getMinutes(), 2) + ':' +
        addZeros(date.getSeconds(), 2) + ' ' +
        addZeros(date.getDay(), 2) + '.' +
        addZeros(date.getMonth() + 1, 2) + '.' +
        date.getFullYear();
}
