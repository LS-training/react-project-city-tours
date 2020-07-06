import React from 'react';
import './Tour.scss';



class Tour extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showInfo: false,
        }
    }


    handleInfo = () =>{
        this.setState({
            showInfo: !this.state.showInfo,
        })
    }


    render() {
       const { id, city, img, name, info } = this.props.tour;
       const {removeTour} = this.props;
       
        return(
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="city of the tour"/>
                    <span className="close-btn" onClick={ () => removeTour(id)}>
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{""}
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down info-btn"/>
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        )
    }
}


export default Tour;