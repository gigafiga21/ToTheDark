import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Main.css';

import Table from '../../Blocks/Table/Table';
import './Main.css';
import dateToString, { addZeros } from '../../../Functions/dateToString';
import datesDifference from '../../../Functions/datesDifference';

/**
 * URL to the json with data for main table
 * @type {String}
 */
const ORIGINS = 'https://raw.githubusercontent.com/denissokolov/tc-internship-task/master/launches.json';

export default class App extends Component
{
    /**
     * Starts process of getting data
     */
    constructor(props)
    {
        super(props);
        this.getData();

        this.state = {
            data: {
                headers: [],
                content: [],
            },
        };

        /**
         * Launches data in the original format
         * @type {Array}
         */
        this.json = [];

        this.tick = this.tick.bind(this);
    }

    /**
     * Converts data to `TableData` type from json, taken from origins
     * @param  {Object} json - "raw" data from origins
     * @return {TableData}
     */
    convertData(json)
    {
        return {
            headers: [
                { key: 'number', value: '#' },
                { key: 'mission', value: 'Mission name' },
                { key: 'vehicle', value: 'Vehicle' },
                { key: 'location', value: 'Location' },
                { key: 'date', value: 'Launch date' },
                { key: 'before', value: 'Time before' },
            ],
            content: json.map((row, index) =>
            {
                const {
                    years,
                    months = 0,
                    date = 0,
                    hours = 0,
                    minutes = 0,
                    quarter = 0,
                } = row.launch;
                const launch = new Date(years, months, date, hours, minutes);
                const timeStamp = dateToString({ ...row.launch, seconds: 0 });
                const before = datesDifference(new Date(), launch);
                const beforeString = before === null ? 'Launched' :
                    addZeros(before.hours, 2) + ':' +
                    addZeros(before.minutes, 2) + ':' +
                    addZeros(before.seconds, 2) + ' ' +
                    before.days + '\u00A0days';

                return {
                    number: index,
                    mission: row.mission,
                    vehicle: row.vehicle,
                    location: row.location,
                    date: timeStamp.time + ' ' + timeStamp.date,
                    before: beforeString,
                };
            }),
        };
    }

    /**
     * Fetches table data from the origins
     */
    getData()
    {
        fetch(ORIGINS)
            .then((responce) =>
            {
                responce.json()
                    .then((data) =>
                    {
                        this.json = data;
                        this.tick();
                    });
            });
    }

    /**
     * Updates table time in second
     */
    tick()
    {
        this.setState({
            data: this.convertData(this.json),
        });
        setTimeout(this.tick, 1000);
    }

    render()
    {
        const { data } = this.state;

        return (
            <div className="app">
                <div className="app__data">
                    <Table data={data} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
