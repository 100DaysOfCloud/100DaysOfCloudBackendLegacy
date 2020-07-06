import React from 'react'
import { FiPlay } from "react-icons/fi";
import Image from '../../../image'
import {VideoThumbWrapper, VideoPoster, VideoVerlay, VideoButton} from './video.stc'

const VideoThumb = ({poster, title, onClick}) => {
    return (
        <VideoThumbWrapper onClick={onClick}>
            <VideoPoster>
                <Image fluid={poster} alt={title}/>					
            </VideoPoster>
            <VideoVerlay>
                <VideoButton>
                    <FiPlay/>
                </VideoButton>
            </VideoVerlay>
        </VideoThumbWrapper>
    )
}

export default VideoThumb;