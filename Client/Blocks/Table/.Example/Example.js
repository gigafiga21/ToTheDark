import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../Table';

const data = {
    headers: [
        { key: 'number', value: '#' },
        { key: 'name', value: 'Nickname' },
        { key: 'rank', value: 'Rank' },
        { key: 'hours', value: 'Hours in game' }
    ],
    content: [
        { number: 1, name: 'gigafiga21', rank: '20', hours: '163' },
        { number: 2, name: 'kibotenok', rank: '18', hours: '160' },
        { number: 3, name: 'player666', rank: '18', hours: '159' },
        { number: 4, name: 'a$$_destroyer', rank: '15', hours: '65' },
        { number: 5, name: 'shadow_wind', rank: '10', hours: '120' },
        { number: 6, name: 'avocado', rank: '3', hours: '10' },
        { number: 6, name: 'newbue', rank: '0' }
    ]
};

ReactDOM.render(<Table data={data}/>, document.querySelector('#example'));
