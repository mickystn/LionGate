/* eslint-disable react/prop-types */

import '../style/CardAnimal.css'


export default function CardAnimal(props){
    return (
        <div className="CardAnimal">
            {props.data.img}
            <div className="CardAnimal-content">
                <h1 className='txt-cardAnimal'>
                    Animal : {props.data.name}
                </h1>
                <h1 className='txt2-cardAnimal'>
                    Species : {props.data.spechies}
                </h1>
                <h1 className='txt2-cardAnimal'>
                    Type : {props.data.Type}
                </h1>
            </div>
            
        </div>
    )
}