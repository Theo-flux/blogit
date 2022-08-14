import {useState} from 'react'
import { Button } from '../../shared'

const iconResource = [
    {
        id: 1,
        name: "ri-image-line",
    },

    {
        id: 2,
        name: "ri-file-gif-line",
    },

    {
        id: 3,
        name: "ri-file-line",
    },

    {
        id: 4,
        name: "ri-file-line",
    },

    {
        id: 5,
        name: "ri-video-line"
    }
]

const TextArea = ({handler, message}) => {
    return(
        <textarea
            style={{resize: 'none'}}
            className='overflow-hidden font-poppins text-sm md:text-xl placeholder:font-medium w-full outline-0' 
            placeholder="What's happening?"
            name={"text"}
            value={message.text}
            onChange={(event) => handler(event)}
        />
    )
}

export default function Blogbox() {
    const [message, setMessage] = useState({text: ""})

    function handleOnchange(event) {
        const {name, value} = event.target;
        setMessage({...message, [name]: value})
    }

    console.log(message.text)

    return (
        <div className={`border-t p-4 flex justify-between items-start`}>
            <img src="/profile-image.svg" className='w-[50px] h-[50px] border rounded-full mr-3' alt="profile image" />

            <div className='w-full'>
                <TextArea
                    message={message}
                    handler={handleOnchange}
                />
                <div className='flex justify-between items-center'>
                    <div>
                        {
                            iconResource.map((icon) => {
                                return(
                                    <i key={icon.id} className={`text-xl font-light mr-2  text-blue-500 ${icon.name}`}/>
                                )
                            })
                        }
                    </div>

                    <Button disabled={message.text ? false: true} text="blog it" className={`disabled:bg-gray-200`}/>
                </div>
            </div>
        </div>
    )
}