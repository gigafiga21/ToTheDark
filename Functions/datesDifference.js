/**
 * Info about time period
 * @typedef  {TimeStamp}
 * @property {Number} seconds
 * @property {Number} minutes
 * @property {Number} hours
 * @property {Number} days
 */

/**
 * Difference between dates in each time measures, null if last < first
 * @param  {Date} first
 * @param  {Date} last
 * @return {TimeStamp|Null}
 */
export default function datesDifference(first, last)
{
    if (last < first)
    {
        return null;
    }

    const ms = last - first;
    let tsec = Math.floor(ms / 1000),
        tmin = Math.floor(tsec / 60),
        thours = Math.floor(tmin / 60),
        tdays = Math.floor(thours / 24);

    return {
        seconds: tsec - tmin * 60,
        minutes: tmin - thours * 60,
        hours: thours - tdays * 24,
        days: tdays,
    };
}
