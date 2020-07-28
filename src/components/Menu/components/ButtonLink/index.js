import React from 'react';

function ButtonLink(props){
    console.log(props);
    return(      
        <a className={props.className} href={props.href}>
            New video
        </a>
    );
}

export default ButtonLink;