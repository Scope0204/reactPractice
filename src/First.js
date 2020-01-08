import React from "react";
import PropTypes from "prop-types";



const foodILike = [
    {
        id:1,
        name: "삼겹살", //string
        ans:"마시따",
        rating:5 //number 
    },
    {
        id:2,
        name: "비빔밥",
        ans:"최고다",
        rating:4.9

    },
    {
        id:3,
        name: "김치",
        ans:"대다나다",
        rating:4.8

    },
    {
        id:4,
        name: "돈까스",
        ans:"일식이 더 나아",
        rating:4.7
    }
];

function Food({name, ans , rating}){
    return <div>
        <h2>i like {name}</h2>
        <h4>{rating}/5.0</h4>
        <h3>그것은 {ans}</h3>
    </div>;
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    ans: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

function First() {
  return( 
        <div>
            <h1>Hello!</h1>
            
            {foodILike.map(dish => ( 
                // dish = object
                <Food key={dish.id} name={dish.name} ans={dish.ans} rating={dish.rating} />
                //리엑트 내부에서 사용하기 위해 id를 사용한다. Food는 사용하지 않음
            ))}
            
        </div>
    );
}

export default First;
