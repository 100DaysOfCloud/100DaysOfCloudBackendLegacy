import React, {Fragment, useState} from 'react'
import Anchor from '../../shared/anchor'
import ModalVideo from '../../shared/modal-video'
import {Thumbnail, Video, Quote, Linked, Gallery} from '../blog-media'
import {
    BlogWrap, 
    BlogContent, 
    BlogDate, 
    BlogTitle, 
    BlogMedia
} from './blog.stc'

const Blog = ({content, ...restProps}) => {
    const {
        slug, dateSlug, date, format, title, image,
        video_link, quote_text, quote_author,
        link, images
    } = content;
    let video_arr, video_id, video_channel;
    if(video_link){
        video_arr = video_link.split('=', -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const [videoOpen, setVideoOpen] = useState(false);
    const modalVideoOpen = () => {
        setVideoOpen(true)
    }
    const modalVideoClose = () => {
        setVideoOpen(false)
    }
    
    return (
        <Fragment>
            <BlogWrap {...restProps}>
                <BlogContent>
                    {date && <BlogDate path={`/date/${dateSlug}`}>{date}</BlogDate>}
                    {title && <BlogTitle><Anchor path={`/${slug}`}>{title}</Anchor></BlogTitle>}
                </BlogContent>
                <BlogMedia>
                    {(format === 'image' || format === 'standard') && (
                        <Thumbnail path={`/${slug}`} image={image} title={title}/>
                    )}
                    {format === 'video' && (
                        <Video
                            onClick={modalVideoOpen}
                            poster={image.childImageSharp.fluid}
                            title={title}
                        />
                    )}
                    {format === 'quote' && <Quote text={quote_text} author={quote_author}/>}
                    {format === 'link' && <Linked link={link}/>}
                    {format === 'gallery' && <Gallery images={images}/>}
                </BlogMedia>
            </BlogWrap>
            <ModalVideo
                channel={video_channel}
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
    )
}

export default Blog
