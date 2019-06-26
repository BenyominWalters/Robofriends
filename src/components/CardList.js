import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // if (true) {  // simulated error for test
    //     throw new Error('NOOOOO!');
    // }
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;