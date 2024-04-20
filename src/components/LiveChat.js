import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState('')
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling

            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(20),
                })
            );

        }, 1000);

        return () => clearInterval(i);
    }, []);

    return (
        <div>
        <div className='border border-gray-600 w-full -ml-4 my-6 mr-1 p-2 h-[500px] rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse '>
            <div className=''>
                {
                    chatMessages.map((c, i) => (
                        <ChatMessage key={i} name={c.name} message={c.message} />
                    ))
                }
            </div>
        </div>
         <form className="w-full -ml-4 -mt-4 p-2 mr-1 border border-black flex flex-row rounded-lg" onSubmit={(e) => {
            e.preventDefault();
            dispatch(
                addMessage({
                    name: "Maumita Sarkar",
                    message: liveMessage,
                })
            );
            setLiveMessage("");
        }}
        >
            <input className="px-2 w-[350px] " type="text" value={liveMessage} onChange={(e) => {setLiveMessage(e.target.value); }}/>
            <button className="px-2 mx-2 bg-green-200 ">Send</button>
        </form>
        </div>
    )
}

export default LiveChat