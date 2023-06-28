import {useEffect, useRef, useState} from "react";



const ddata ={
    name:"bhargava"

}

function hadlechat() {
    return (<div> </div>)
}

const Chat = ()=>{
    const [onlinedata,setonlinedata] = useState([ddata])
    const [send,setsend] = useState([' '])
    const incomingchat =['sgsgsgs','sgsdgsghs','dgsfhsh','sfhasghsag','sfhsfhs','sfghs','hghshs','sfdghsafhg','gfhasfg','fghfsgh','fhgfsh','asghs','fgfh','fhf','h']
    const chat=[];
    const chatRef = useRef(null);
   /// setchatdata([...chatdata,chat])
    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [chat, send]);

    function handleMessage (e) {
    if (e.key==='Enter'){
        setsend([...send, e.target.value]);
        e.target.value =' ';
    }
    }

    return(
        <>
    <div className='flex'>

            <div className='bg-[#628099] h-screen w-[350px] '>
                <h1 className='bg-green-400 h-[50px] rounded-lg'>{onlinedata.length} Online</h1>
                {onlinedata.map((data)=>{
                    return( <h1 className='bg-green-400 h-[50px] rounded-lg mt-1' key={data.index} onClick={hadlechat()}>{data.name}</h1>)})}
            </div>
        <div className='bg-white rounded-lg max-h-screen  w-screen overflow-auto ' ref={chatRef}>

            {send?.map((data)=>{
                return(<h1 className='rounded-lg text-left  bg-[#b3ddff] bg-auto min-w-fit' key={data.index}>{data} </h1>)
            })}
            {/*{send?.map((data)=>{*/}
            {/*    return(*/}
            {/*        data.direction==='send'?*/}
            {/*        <h1 className='text-right mr-2' key={data.index}>{data.message.send} </h1>:*/}
            {/*    <h1 className='text-left mr-2' key={data.index}>{data.message.recive} </h1>)*/}
            {/*})}*/}

        </div>
        <div className=' ml-[360px] bottom-3 fixed flex w-full'>
            <input className=' w-1/2   border rounded-md mr-2' type='text' onKeyPress={handleMessage} />
            <button className='bg-green-400 rounded-lg w-1/5'>Send</button>
        </div>

    </div>

    </>
    )
}
export default  Chat;
