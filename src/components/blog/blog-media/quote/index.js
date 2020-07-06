import React from 'react'
import { GoQuote } from "react-icons/go";
import {BlogQuote} from './quote.stc'

const Quote = ({text, author}) => {
    return (
        <BlogQuote>
            <GoQuote className="icon"/>
            {text && <h3>{text}</h3>}
            {author && <footer>-{author}</footer>}
        </BlogQuote>
    )
}

export default Quote
