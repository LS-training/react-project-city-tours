import React from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../../tourData';

class TourList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tours: tourData
        }
    }

    removeTour = id => {
        console.log(id);
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState ({
            tours: sortedTours,
        })
    }

    render () {
       // console.log(this.state.tours);
        
        const { tours } = this.state;
        
        return (
            <section className="tourlist">
                {
                    tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>))
                }
            </section>
                
        )
    }
}


export default TourList;    