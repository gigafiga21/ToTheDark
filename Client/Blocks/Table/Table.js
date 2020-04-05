import React from 'react';
import './Table.css';

/**
 * Description of the table data
 * @typedef  {Object} TableContent
 * @property {Array[Object]} headers - description of table head
 * @property {String}        headers.key   - key in table content row description
 * @property {String}        headers.value - text to be rendered in header cell
 * @property {Array[Object]} data.content  - row content, where key - cell header name
 */

/**
 * Draws table
 * @param {TableContent} data - table contents
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
        <table className="table">
            <thead className="table__header">
                <tr>{headers}</tr>
            </thead>
            <tbody className="table__body">
                {content}
            </tbody>
        </table>
    );
}
