import React from 'react';
import './Table.css';

/**
 * Description of the table header
 * @typedef  {Object} Header
 * @property {String} key   - key in table content row description
 * @property {String} value - text to be rendered in header cell
 */

/**
 * Draws table
 * @param {Object} data - table contents
 * @param {Array[Header]} data.headers - headers of the table
 * @param {Array[Object]} data.content - row content, where key - cell header name
 */
export default function({ data })
{
    const headers = data.headers.map((header) =>
    {
        return (<td key={header.key}>{header.value}</td>);
    });

    const content = data.content.map((data, index) =>
    {
        return (
            <tr key={index}>
                {headers.map((cell) =>
                {
                    const value = data[cell.key];
                    return (<td key={cell.key}>{value !== undefined ? value : ''}</td>);
                })}
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>
                {content}
            </tbody>
        </table>
    );
}
