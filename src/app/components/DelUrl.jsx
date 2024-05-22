import React, { useState } from 'react'
import { FaLink } from "react-icons/fa6";
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    GabShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    GabIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
    XIcon,
} from "react-share";



let lokation = ""

const DelUrl = () => {
    if (typeof window !== "undefined") {
        lokation = window.location.href
      }
    
    const [linkTest, setlinkTest] = useState("Kopiér link")
    return (
        <div className='flex gap-2 justify-center items-center'>
            <FacebookShareButton
                url={lokation}
                hashtag={'#DSR'}
            >
                <FacebookIcon size={40} round={true} />
            </FacebookShareButton>

            <FacebookMessengerShareButton
                url={lokation}
            >
                <FacebookMessengerIcon size={40} round={true} />
            </FacebookMessengerShareButton>

            <TwitterShareButton
                url={lokation}
                hashtag={'#DSR'}
            >
                <TwitterIcon size={40} round={true} />
            </TwitterShareButton>

            <EmailShareButton
                url={lokation}
            >
                <EmailIcon size={40} round={true} />
            </EmailShareButton>

            <div onClick={() => setlinkTest("Link kopieret")} className='tooltip tooltip-bottom' data-tip={linkTest}>
                <FaLink onClick={() => {navigator.clipboard.writeText(lokation)}} className='cursor-pointer border border-black rounded-full p-2 bg-white invert' size={40} />
            </div>
        </div>
    )
}

export default DelUrl