/* eslint-disable react/prop-types */

import '../style/Card.css'

export default function Card(props){
    return (
        <div className="Card">
            {props.icon}
            {props.name}
        </div>
    )

}