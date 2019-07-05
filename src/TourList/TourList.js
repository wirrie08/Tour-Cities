import React, { Component } from 'react';
import Tour from "../Tour/Tour";
import "./TourList.scss";
import {tourData} from "../tourData";

class TourList extends Component {
    state= {
        tours:tourData
    };
    removeTour = id =>{
      
    const{tours} = this.state;
    const sortedItems = tours.filter(tour =>  tour.id !==id);
  this.setState({
      tours:sortedItems
  })
    }
    render() {
        const {tours} = this.state;
        return (
            <section className='tourlist'>
                 { tours.map(tour => {
                return <Tour key={tour.id} tour={tour} removeTour={this.removeTour}
                     /> })}        
            </section>
        )
    }
}

export default TourList
