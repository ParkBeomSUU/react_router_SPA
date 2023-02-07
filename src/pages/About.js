import {useSearchParams } from 'react-router-dom';



const About = () =>{
    const [searchParams, setSearchParmas] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');


    const onToggleDetail= ( ) => {
        setSearchParmas({mode,detail: detail ==='true'? false : true});

    
    };

    const onIncreaseMode =() =>{
        const nextMode = mode === null ? 1 : parseInt(mode) +1;
        setSearchParmas({ mode : nextMode,detail});
    };

    return(
        <div>
            <h1> 소개</h1>
            <p> 소개해보는 페이지입니다.</p>
            <p>detail : {detail} </p>
            <p>mode : {mode} </p>
            <button onClick={onToggleDetail}> Toggle detail</button>
            <button onClick={onIncreaseMode}>mode +1</button>



        </div>
    )
};

export default About;